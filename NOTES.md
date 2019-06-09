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

- top menu in 2 lines when small screen
- transclude sidebar content
- create documents component
- rename MwModules
- set lang for html tag
- storybook
- app shell
- links in readme for core
- stylelint plugins
- check lazy routes fix
- localization
- write article about changing themes

### IDEAS FOR COMPONENTS

- https://material.io/design/sound/
- reusable pipe from https://codeburst.io/angular-bad-practices-eab0e594ce92
- eventBus
- File api https://stackoverflow.com/questions/5872815/reading-local-files-with-input-type-file
