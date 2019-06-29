import * as express from 'express';

export const removeTrailingSlash = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.url.substr(-1) === '/' && req.url.length > 1) {
    res.redirect(301, req.url.slice(0, -1));
  } else {
    next();
  }
};
