#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m 'push'
git push -f "https://github.com/Anyi0958/vue-admin-ay.git" master
git push -f "https://gitee.com/anitt/vue-admin-ay.git" master
exec /bin/bash
