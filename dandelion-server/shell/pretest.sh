#!/bin/bash

echo '进入预发项目'
cd $3
echo '切换到开发分支'
git checkout $2
git pull origin master
echo 'pull 所有代码'
git pull origin $2
echo '删除node_modules'
rm -rf node_modules/
echo 'npm install'
npm install
npm run build