#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@github.com:Anyi0958/vue-admin-ay.git" master
exec /bin/bash




