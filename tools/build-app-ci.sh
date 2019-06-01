#!/usr/bin/env bash

app="$1"
env="$2"

if [[ "$app" != "" && "$env" != "" ]] ; then
    npx ng build "$app" --delete-output-path --configuration "$env"
    npx ng run "$app":server --delete-output-path
    webpack --config ./apps/"$app"/webpack.server.config.js --progress --colors
    node dist/"$app"/prerender.js
else
    echo "build app ci param errors"
    exit 1
fi
