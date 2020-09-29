#!/usr/bin/env bash
set -e
npm run build
cd dist
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@gitee.com:anitt/vue-admin-ay.git" master:ay-pages
start "https://gitee.com/anitt/vue-admin-ay"
git push -f "https://${access_token}@github.com:Anyi0958/vue-admin-ay.git" master:ay-pages
cd -
exec /bin/bash

