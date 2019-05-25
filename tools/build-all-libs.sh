#!/usr/bin/env bash

./tools/build-lib.sh mw-angular/core || exit
./tools/build-lib.sh mw-angular/complex-filter || exit
./tools/build-lib.sh mw-angular/media || exit
