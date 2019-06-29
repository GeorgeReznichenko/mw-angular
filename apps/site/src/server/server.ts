import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import { join } from 'path';
import { parse as urlParse } from 'url';
import { existsSync, readFileSync } from 'fs';

import { SKIPPED_ROUTES } from './skipped-routes';
import { PRERENDERED_ROUTES } from './prerendered-routes';

enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 5200;
const DIST_FOLDER = join(process.cwd(), 'dist/site/browser');
const INDEX_FILE_PATH = join(DIST_FOLDER, 'index.html');
const NOT_FOUND_MARKER = 'SET_STATUS_404';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../../../dist/site/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  // @ts-ignore
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  }),
);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Remove trailing slash
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.url.substr(-1) === '/' && req.url.length > 1) {
    res.redirect(301, req.url.slice(0, -1));
  } else {
    next();
  }
});

// Serve static files
app.get(
  '*.*',
  express.static(DIST_FOLDER, {
    maxAge: '1y',
  }),
);

// Serve skipped routes
if (SKIPPED_ROUTES.length > 0) {
  // @ts-ignore
  app.get(SKIPPED_ROUTES, (req: express.Request, res: express.Response) => {
    res.sendFile(INDEX_FILE_PATH);
  });
}

// Serve prerendered routes
if (PRERENDERED_ROUTES.length > 0) {
  app.get('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const reqUrl = urlParse(req.url, false);

    if (reqUrl.pathname !== undefined && PRERENDERED_ROUTES.includes(reqUrl.pathname)) {
      const filePath = `${DIST_FOLDER}${reqUrl.pathname}/index.html`;

      if (!existsSync(filePath)) {
        throw new Error(`Prerendered file ${filePath} does not exist.`);
      }

      const html = readFileSync(filePath, 'utf8');

      // send 404 status code if this is 404 page
      if (html.indexOf(NOT_FOUND_MARKER) !== -1) {
        res.status(404);
      }

      res.send(html);
    } else {
      next();
    }
  });
}

// Serve dynamically rendered routes
app.get('*', (req: express.Request, res: express.Response) => {
  res.render(INDEX_FILE_PATH, { req, res }, (err, html) => {
    if (err) {
      throw new Error(`Server render fails.`);
    } else {
      // send 404 status code if this is 404 page
      if (html.indexOf(NOT_FOUND_MARKER) !== -1) {
        res.status(404);
      }

      res.send(html);
    }
  });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
