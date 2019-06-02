#!/usr/bin/env bash

lib="$1"
type="$2"
basePath="$(pwd)"
branch="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$lib" != "" && "$type" != "" && "$branch" == "production" ]] ; then
    ./tools/check-lib.sh "$lib"

    cd libs/"$lib"
    npm version "$type"

    cd "$basePath"
    git commit -am "Publish new version of $lib"
    git push && git push --tags

    ./tools/build-lib.sh "$lib"

    npm publish dist/"$lib" --access public
else
    echo "param errors or git branch is not production"
    exit 1
fi
