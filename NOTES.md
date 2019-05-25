# Most Wanted Angular Modules

## APPS

- change "newProjectRoot": "apps",
- npx ng generate application name --routing=true --style=scss

## LIBS

- change "newProjectRoot": "libs" in angular.json,
- npx ng generate library @mw-angular/name --prefix=mw
- add license file and info to package.json

## SERVE

- for serving on device use "npm run start-no-libs-for-devices:site" and open
  from your ip, i.e. https://192.168.2.70:4200

## TODO

- set lang for html tag
- storybook
- configure environments
- app shell
- travis and deploy
- links in readme for core
- e2e for CI

### IDEAS FOR COMPONENTS

- https://material.io/design/sound/
- reusable pipe from https://codeburst.io/angular-bad-practices-eab0e594ce92
- eventBus
