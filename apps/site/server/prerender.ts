import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { renderModuleFactory } from '@angular/platform-server';

import { join } from 'path';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

import { PRERENDERED_ROUTES } from './prerendered-routes';

enableProdMode();

const DIST_FOLDER = join(process.cwd(), 'dist/site/browser');
const INDEX_FILE_PATH = join(DIST_FOLDER, 'index.html');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../../dist/site/server/main.js');

const index = readFileSync(INDEX_FILE_PATH, 'utf8');

let previousRender = Promise.resolve();

PRERENDERED_ROUTES.forEach((route) => {
  const fullPath = join(DIST_FOLDER, route);

  // Make sure the directory structure is there
  if (!existsSync(fullPath)) {
    mkdirSync(fullPath);
  }

  // Writes rendered HTML to index.html, replacing the file if it already exists.
  previousRender = previousRender
    .then(() =>
      renderModuleFactory(AppServerModuleNgFactory, {
        document: index,
        url: route,
        extraProviders: [provideModuleMap(LAZY_MODULE_MAP)],
      }),
    )
    .then((html) => writeFileSync(join(fullPath, 'index.html'), html));
});
