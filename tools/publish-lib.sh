#!/usr/bin/env bash

lib="$1"
type="$2"
basePath="$(pwd)"
branch="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$lib" != "" && "$type" != "" && "$branch" == "production" ]] ; then
    ./tools/check-lib.sh "$lib" < /dev/null

    cd libs/"$lib"
    ver="$(npm version "$type")"

    cd "$basePath"
    git commit --no-verify -am "Publish new version of $lib - $ver"
    git push --no-verify && git push --no-verify --tags

    ./tools/build-lib.sh "$lib" < /dev/null

    read -p "Enter password from your authenticator: " otp

    npm publish dist/"$lib" --access public --otp "$otp"
else
    echo "param errors or git branch is not production"
    exit 1
fi
