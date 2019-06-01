#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    npx ng lint @"$lib" || exit
    echo "Testing \"@$lib\"..."
    npx ng test @"$lib" --watch=false --browsers=ChromeHeadless || exit
else
    echo "param errors"
    exit 1
fi
