#!/usr/bin/env bash

lib="$1"
basePath="$(pwd)"

if [[ "$lib" != "" ]] ; then
    cd libs/"$lib"
    npm version patch -m "Publish version %s"
    git push && git push --tags

    cd "$basePath"
    ./tools/build-lib.sh "$lib"

    cd dist/"$lib"
    npm publish --access public
else
    echo "param errors"
    exit 1
fi
