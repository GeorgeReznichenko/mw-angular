#!/usr/bin/env bash

app="$1"
env="$2"

if [[ "$app" != "" && "$env" != "" ]] ; then
    ng build "$app" --delete-output-path --configuration "$env"
    ng run "$app":server --delete-output-path
    webpack --config ./apps/"$app"/webpack.server.config.js --progress --colors
    node dist/"$app"/prerender.js
else
    echo "ci param errors $app $env"
    exit 1
fi
