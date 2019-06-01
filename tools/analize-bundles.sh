#!/usr/bin/env bash

app="$1"
env="$2"

if [[ "$app" != "" && "$env" != "" ]] ; then
    rimraf dist/"$app"
    ./tools/build-all-libs.sh
    ng build "$app" --delete-output-path --configuration "$env" --stats-json
    webpack-bundle-analyzer dist/"$app"/browser/stats-es2015.json
else
    echo "param errors"
    exit 1
fi
