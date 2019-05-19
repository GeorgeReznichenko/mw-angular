#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    ng lint @"$lib" || exit
    ng test @"$lib" --watch=false --browsers=ChromeHeadless || exit
else
    echo "param errors"
    exit 1
fi
