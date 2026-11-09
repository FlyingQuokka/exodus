"""Copy what runs on the live server from aibotshare/site into the botterversewp repository.

Run:  python tools/publish-to-repo.py [--repo PATH] [--dry-run] [--allow-preview]

The source of truth stays in aibotshare/site. The repository only holds what the live server needs to build or
update everything made here:

    site/btv-theme   ->  <repo>/wp-content/themes/btv-theme
    site/btv-sync    ->  <repo>/wp-content/plugins/btv-sync
    site/README.md   ->  <repo>/README.md
    site/deploy.sh   ->  <repo>/deploy.sh

Left out on purpose: bin/check-domains.php and bin/dump-pages.php (development helpers) and any README inside a folder.
Before copying it rebuilds data/emails.json from Emails/build then stops when the domain check fails or the
go-live preview block is still in inc/die.php (use --allow-preview only to fill the repository early).
Files in the two target folders that no longer exist at the source are removed. Nothing else in the repository is touched.
Commit and push in the repository yourself.
"""
import argparse
import os
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, 'site')
DEFAULT_REPO = os.path.normpath(r'E:\Projects\AIBotShare\Repos\Botterverse\botterversewp')

MAPPINGS = [
    ('btv-theme', os.path.join('wp-content', 'themes', 'btv-theme')),
    ('btv-sync', os.path.join('wp-content', 'plugins', 'btv-sync')),
]
SKIP_FILES = {'check-domains.php', 'dump-pages.php', 'README.md', 'Thumbs.db', '.DS_Store'}
SKIP_DIRS = {'.git', 'node_modules', '.tmp-db'}
GITATTRIBUTES = '* text=auto eol=lf\n'


def walk(base):
    for folder, dirs, files in os.walk(base):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for name in files:
            if name in SKIP_FILES:
                continue
            full = os.path.join(folder, name)
            yield os.path.relpath(full, base)


def same(a, b):
    if not os.path.exists(b) or os.path.getsize(a) != os.path.getsize(b):
        return False
    with open(a, 'rb') as x, open(b, 'rb') as y:
        return x.read() == y.read()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--repo', default=DEFAULT_REPO)
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--allow-preview', action='store_true')
    args = ap.parse_args()
    repo = os.path.abspath(args.repo)

    with open(os.path.join(SITE, 'btv-theme', 'inc', 'die.php'), encoding='utf-8') as f:
        if 'REMOVE THIS BLOCK BEFORE GO LIVE' in f.read() and not args.allow_preview:
            sys.exit('Stopped: the preview block in site/btv-theme/inc/die.php is still there. Remove it before going live (or use --allow-preview).')

    if subprocess.call([sys.executable, os.path.join(ROOT, 'tools', 'build-email-data.py')], stdout=subprocess.DEVNULL) != 0:
        sys.exit('Stopped: build-email-data.py failed.')
    if subprocess.call(['php', os.path.join(SITE, 'btv-theme', 'bin', 'check-domains.php')], stdout=subprocess.DEVNULL) != 0:
        sys.exit('Stopped: check-domains.php found a typed domain. Run it to see where.')

    if not os.path.isdir(repo):
        sys.exit('Stopped: the repository folder %s does not exist. Create it first.' % repo)

    added = updated = removed = 0
    for src_name, dest_rel in MAPPINGS:
        src_base = os.path.join(SITE, src_name)
        dest_base = os.path.join(repo, dest_rel)
        wanted = set(walk(src_base))
        for rel in sorted(wanted):
            src, dest = os.path.join(src_base, rel), os.path.join(dest_base, rel)
            if same(src, dest):
                continue
            added, updated = (added + 1, updated) if not os.path.exists(dest) else (added, updated + 1)
            print(('add     ' if not os.path.exists(dest) else 'update  ') + os.path.join(dest_rel, rel))
            if not args.dry_run:
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                shutil.copyfile(src, dest)
        if os.path.isdir(dest_base):
            for rel in sorted(set(walk(dest_base)) - wanted):
                removed += 1
                print('remove  ' + os.path.join(dest_rel, rel))
                if not args.dry_run:
                    os.remove(os.path.join(dest_base, rel))

    for src, dest_rel in [(os.path.join(SITE, 'README.md'), 'README.md'), (os.path.join(SITE, 'deploy.sh'), 'deploy.sh')]:
        dest = os.path.join(repo, dest_rel)
        if not same(src, dest):
            print('update  ' + dest_rel)
            updated += 1
            if not args.dry_run:
                shutil.copyfile(src, dest)
    attrs = os.path.join(repo, '.gitattributes')
    if not os.path.exists(attrs) and not args.dry_run:
        with open(attrs, 'w', newline='\n') as f:
            f.write(GITATTRIBUTES)

    print('%s%d added, %d updated, %d removed' % ('Dry run: ' if args.dry_run else '', added, updated, removed))


if __name__ == '__main__':
    main()
