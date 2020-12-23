#!/usr/bin/env bash

set -e
npm run build
cd an
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f "https://gitee.com/anitt/vue-admin-ay.git" master:ay-pages
start "https://gitee.com/anitt/vue-admin-ay/pages"
git push -f "https://github.com/Anyi0958/vue-admin-ay.git" master:ay-pages
cd -
exec /bin/bash

