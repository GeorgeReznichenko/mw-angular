import { Inject, Injectable, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(
    private platformQueryService: PlatformService,
    @Inject(DOCUMENT) private document: any,
    @Optional()
    @Inject(REQUEST)
    private request: Request,
  ) {}

  hasRequest(): boolean {
    return (this.platformQueryService.isServer() && this.request !== null) || this.platformQueryService.isBrowser();
  }

  /**
   * Example localhost:5000 | www.domain.com
   */
  getHost(): string {
    let host: string | undefined;

    if (this.platformQueryService.isServer()) {
      if (this.request === null) {
        throw new Error('Request object in not set.');
      }

      host = this.request.get('host');
    } else if (this.platformQueryService.isBrowser()) {
      host = this.document.location.host;
    } else {
      throw new Error('Unknown platform.');
    }

    if (typeof host === 'undefined') {
      throw new Error('Host is undefined.');
    }

    return host;
  }

  /**
   * Example http://localhost:5000 | https://www.domain.com
   */
  getLocationOrigin(): string {
    let locationOrigin: string;

    if (this.platformQueryService.isServer()) {
      if (this.request === null) {
        throw new Error('Request object in not set.');
      }

      const host = this.request.get('host');

      if (typeof host === 'undefined') {
        throw new Error('Host is undefined.');
      }

      const protocol = host.lastIndexOf('localhost') === 0 ? 'http' : 'https';
      locationOrigin = `${protocol}://${host}`;
    } else if (this.platformQueryService.isBrowser()) {
      locationOrigin = this.document.location.origin;
    } else {
      throw new Error('Unknown platform.');
    }

    return locationOrigin;
  }

  /**
   * Example: if url is https://www.domain.com/en/about?qp=1 method returns '/en/about'
   */
  getLocationPathname(): string {
    let locationPathname: string;

    if (this.platformQueryService.isServer()) {
      if (this.request === null) {
        throw new Error('Request object in not set.');
      }

      locationPathname = this.request.path;
    } else if (this.platformQueryService.isBrowser()) {
      locationPathname = this.document.location.pathname;
    } else {
      throw new Error('Unknown platform.');
    }

    return locationPathname;
  }
}
