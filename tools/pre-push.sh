#!/usr/bin/env bash

npm run lint-all-scss || exit
npm run check-all-libs || exit

npm run lint:site || exit
npm run test:site || exit
npm run e2e-ci:site || exit
