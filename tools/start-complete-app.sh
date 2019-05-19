#!/usr/bin/env bash

app="$1"
env="$2"

if [[ "$app" != "" && "$env" != "" ]] ; then
    ./tools/build-app.sh "$app" "$env"
    node dist/"$app"/server.js
else
    echo "param errors"
    exit 1
fi
