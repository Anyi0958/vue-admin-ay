#!/usr/bin/env bash
set -e
npm run build
cd dist
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@gitee.com:anitt/vue-admin-ay.git" master:ay-pages
start "https://gitee.com/chu1204505056/vue-admin-beautiful/pages"
git push -f "https://${access_token}@github.com:Anyi0958/vue-admin-ay.git" master:ay-pages
cd -
exec /bin/bash

