#!/usr/bin/env bash

lib="$1"
basePath="$(pwd)"

if [[ "$lib" != "" ]] ; then
    cd libs/"$lib"
    npm version patch
    git push origin HEAD

    cd "$basePath"
    ./tools/build-lib.sh "$lib"

    cd dist/"$lib"
    npm publish --access public
else
    echo "param errors"
    exit 1
fi
