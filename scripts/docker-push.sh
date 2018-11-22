#!/bin/bash
set -eo pipefail

DOCKER_IMAGE="caninjas/newrelic_insights_exporter"

echo "Logging to registry"
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

echo "Building docker image"
docker build -t "$DOCKER_IMAGE":latest .
docker tag "$DOCKER_IMAGE":latest "$DOCKER_IMAGE":"$TRAVIS_TAG"

echo "Pushing docker image"
docker push "$DOCKER_IMAGE":latest
docker push "$DOCKER_IMAGE":"$TRAVIS_TAG"
