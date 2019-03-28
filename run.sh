#!/usr/bin/env bash
set -e

CODE_STATUS="$(git fetch -v --dry-run 2>&1)"
echo ${CODE_STATUS}

if [[ ${CODE_STATUS} != *"up to date"* ]]; then
    echo "Code updating"
    git pull --rebase
    docker stop user-testing
    docker rm user-testing
    docker build -t usertesting:1 .
    docker run -d --name user-testing -p 3000:3000 usertesting:1
fi
