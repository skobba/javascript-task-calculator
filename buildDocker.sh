#!/usr/bin/env bash
set -e

SECONDS=0 # start timer

echo "Install dependencies"
npm install

echo "SECONDS"
echo $SECONDS

echo "Start build in docker image";
docker build -t steria/demo:latest . --no-cache

echo "SECONDS"
echo $SECONDS