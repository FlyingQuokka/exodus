#!/usr/bin/env bash
# Run a command on the live Botterverse server over SSH.
#
#   bash tools/live-ssh.sh 'cd ~/botterversewp && git log --oneline | head -3'
#   bash tools/live-ssh.sh < some-script.sh        (the script is read from standard input and run with bash -s)
#
# The connection details are read from the info file Docos/Server-Info.txt in the Botterverse folder (host on line 6 and port on line 9
# and user name on line 12 and the key passphrase on line 15). The passphrase is passed to ssh through a temporary
# helper that is deleted afterwards. It is never printed. Do not print the info file in chat or in logs.
#
# The server host key is pinned in btv_known_hosts in the key folder (ed25519, SHA256:o8cvxBXf...WT51Zo, checked
# against the fingerprint WinSCP showed on 10 November 2026). A different key stops the connection. If Krystal change
# the server key, confirm the new fingerprint in WinSCP (Session, Server/Protocol Information) before replacing the file.

KEYS="${BTV_KEYS:-/e/Projects/AIBotShare/Repos/Botterverse/.ssh}"
INFO="${BTV_INFO:-/e/Projects/AIBotShare/Repos/Botterverse/Docos/Server-Info.txt}"
KEY="$KEYS/btv_rsa_live_server"
KNOWN="$KEYS/btv_known_hosts"
[ -f "$INFO" ] && [ -f "$KEY" ] && [ -f "$KNOWN" ] || { echo "Missing $INFO or $KEY or $KNOWN" >&2; exit 2; }

line() { tr -d '\r' < "$INFO" | sed -n "$1p"; }
clean() { tr -cd 'A-Za-z0-9._-'; }   # drops stray invisible characters
HOST="$(line 6 | clean)"; PORT="$(line 9 | clean)"; USER_NAME="$(line 12 | clean)"

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
printf '#!/bin/sh\ntr -d "\\r" < "%s" | sed -n 15p\n' "$INFO" > "$WORK/askpass.sh"
chmod +x "$WORK/askpass.sh"

if [ $# -gt 0 ]; then REMOTE=("$1"); else REMOTE=(bash -s); fi

SSH_ASKPASS="$WORK/askpass.sh" SSH_ASKPASS_REQUIRE=force DISPLAY=:0 \
  ssh -i "$KEY" -p "$PORT" -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes \
      -o UserKnownHostsFile="$KNOWN" -o LogLevel=ERROR -o ConnectTimeout=20 \
      "$USER_NAME@$HOST" "${REMOTE[@]}"
