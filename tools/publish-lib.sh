#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    npm version patch
    git push origin HEAD
    ./tools/build-lib.sh "$lib"
    cd dist/"$lib"
    npm publish --access public
else
    echo "param errors"
    exit 1
fi
