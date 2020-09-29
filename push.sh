#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m 'push'
git push -f "git@github.com:Anyi0958/vue-admin-ay.git" master
exec /bin/bash
