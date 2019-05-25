#!/usr/bin/env bash

npm run lint-scss
npm run check-all-libs

npm run lint:site
npm run test:site
npm run e2e:site
