#!/usr/bin/env bash

app="$1"
env="$2"

if [[ "$app" != "" && "$env" != "" ]] ; then
    rimraf dist/"$app"
    ./tools/build-all-libs.sh
    ./tools/build-app-ci.sh "$app" "$env"
else
    echo "param errors"
    exit 1
fi
