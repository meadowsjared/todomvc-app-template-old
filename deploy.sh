#!/usr/bin/env sh

# abort on errors
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'new deployment'
git push -f git@github.com/meadowsjared/todomvc-app-template.git main:gh-pages

cd -