#!/usr/bin/env bash

lib="$1"
basePath="$(pwd)"

if [[ "$lib" != "" ]] ; then
    cd libs/"$lib"
    npm version patch

    cd "$basePath"
    git commit -am "Publish new version of $lib"
    git push && git push --tags

    ./tools/build-lib.sh "$lib"

    cd dist/"$lib"
    npm publish --access public
else
    echo "param errors"
    exit 1
fi
