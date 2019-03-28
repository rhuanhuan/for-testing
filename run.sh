#!/usr/bin/env bash
set -e

docker stop user-testing
docker rm user-testing
docker build -t usertesting:1 .
docker run -d --name user-testing -p 3000:3000 usertesting:1
