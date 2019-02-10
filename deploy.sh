#!/usr/bin/env sh

# This is optional if you arent using github pages for serving

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist


###########################################
#                                         #
# if you are deploying to a custom domain #
#                                         #
###########################################
# echo 'www.example.com' > CNAME


git init
git add -A
git commit -m 'deploy'


###########################################
#                                         #
# if you are deploying to a custom domain #
#                                         #
###########################################
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:staghouse/mtgjson-website.git master:gh-pages

cd -