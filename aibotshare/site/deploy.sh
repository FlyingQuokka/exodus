#!/usr/bin/env bash
# Deploy the Botterverse site from this repository into a WordPress install.
#
# Run from anywhere with:  bash deploy.sh --wp=/path/to/wordpress [options]
#
# Options
#   --wp=PATH        WordPress folder (the one holding wp-content). Required.
#   --host=HOST      Site host such as botterverse.com. Required with --pages.
#   --user=LOGIN     WordPress admin login. Required with --sync.
#   --pages=a,b      Page slugs to write, for example home,pricing. Use "all" for every page.
#   --sync           Run the btv-sync plugin (tags, emails, automations, forms, banner, help templates).
#   --publish        With --sync: publish new automations instead of leaving them as drafts.
#   --backed-up      Confirms a database backup was taken. Required with --pages or --sync.
#   --no-pull        Skip git pull and deploy what is already checked out.
#   --dry-run        Show what would change and run nothing.
#
# The static error pages and the three WordPress error drop-ins (db-error.php and maintenance.php and php-error.php)
# are copied to the WordPress folder every time. They need the ErrorDocument block in .htaccess (see the handover).
# Without --pages and --sync only the files are copied. Theme styles and templates are live at once.
# Page text lives in the database so it needs --pages. Tags and emails and forms need --sync.

set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ALL_PAGES="home pricing how-it-works affiliates faq support feedback founders bot-market"

WP=""; HOST=""; USER_LOGIN=""; PAGES=""; SYNC=0; PUBLISH=0; BACKED=0; PULL=1; DRY=0

for arg in "$@"; do
  case "$arg" in
    --wp=*) WP="${arg#*=}" ;;
    --host=*) HOST="${arg#*=}" ;;
    --user=*) USER_LOGIN="${arg#*=}" ;;
    --pages=*) PAGES="${arg#*=}" ;;
    --sync) SYNC=1 ;;
    --publish) PUBLISH=1 ;;
    --backed-up) BACKED=1 ;;
    --no-pull) PULL=0 ;;
    --dry-run) DRY=1 ;;
    *) echo "Unknown option: $arg" >&2; exit 2 ;;
  esac
done

fail() { echo "Stopped: $*" >&2; exit 1; }
run() { if [ "$DRY" = 1 ]; then echo "[dry run] $*"; else "$@"; fi; }

[ -n "$WP" ] || fail "give the WordPress folder with --wp=PATH"
[ -d "$WP/wp-content" ] || fail "$WP has no wp-content folder"
[ -n "$PAGES" ] && [ -z "$HOST" ] && fail "--pages needs --host=HOST"
[ "$SYNC" = 1 ] && [ -z "$USER_LOGIN" ] && fail "--sync needs --user=LOGIN"
if { [ -n "$PAGES" ] || [ "$SYNC" = 1 ]; } && [ "$BACKED" != 1 ]; then
  fail "take a database backup then add --backed-up"
fi
command -v rsync >/dev/null || fail "rsync is not installed"
if [ -n "$PAGES" ] || [ "$SYNC" = 1 ]; then command -v php >/dev/null || fail "php is not available on the command line"; fi

if [ "$PULL" = 1 ]; then
  echo "Pulling the latest code"
  run git -C "$REPO" pull --ff-only
fi

echo "Copying the theme and the plugin"
RSYNC_OPTS="-a --delete"
[ "$DRY" = 1 ] && RSYNC_OPTS="-a --delete --dry-run --itemize-changes"
rsync $RSYNC_OPTS "$REPO/wp-content/themes/btv-theme/" "$WP/wp-content/themes/btv-theme/"
rsync $RSYNC_OPTS "$REPO/wp-content/plugins/btv-sync/" "$WP/wp-content/plugins/btv-sync/"

echo "Copying the error pages"
ERR="$REPO/wp-content/plugins/btv-sync/error-pages"
for f in "$ERR"/btv-error-*.html; do run cp "$f" "$WP/$(basename "$f")"; done
for f in "$ERR"/dropins/*.php; do run cp "$f" "$WP/wp-content/$(basename "$f")"; done

if [ -n "$PAGES" ]; then
  [ "$PAGES" = "all" ] && PAGES="${ALL_PAGES// /,}"
  IFS=',' read -ra SLUGS <<< "$PAGES"
  for slug in "${SLUGS[@]}"; do
    case " $ALL_PAGES " in *" $slug "*) ;; *) fail "unknown page slug: $slug" ;; esac
    echo "Writing page: $slug"
    run php "$WP/wp-content/themes/btv-theme/bin/install-pages.php" --wp="$WP" --host="$HOST" --only="$slug"
  done
fi

if [ "$SYNC" = 1 ]; then
  echo "Running the sync"
  if [ "$PUBLISH" = 1 ]; then
    run php "$WP/wp-content/plugins/btv-sync/bin/run-sync.php" --wp="$WP" --user="$USER_LOGIN" --publish
  else
    run php "$WP/wp-content/plugins/btv-sync/bin/run-sync.php" --wp="$WP" --user="$USER_LOGIN"
  fi
fi

echo "Done."
