#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    rimraf dist/"$lib"
    ng build @"$lib"
else
    echo "build lib param errors"
    exit 1
fi
