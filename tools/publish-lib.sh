#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    npm version patch
    ./tools/build-lib.sh "$lib"
    cd dist/"$lib"
    npm publish
else
    echo "param errors"
    exit 1
fi
