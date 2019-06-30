import { TranslateLoader } from '@ngx-translate/core';
import { readFileSync } from 'fs';
import { Observable } from 'rxjs';

export class TranslateServerLoader implements TranslateLoader {
  constructor(private prefix: string = '/dist/site/browser/assets/i18n/', private suffix: string = '.json') {}

  getTranslation(lang: string): Observable<any> {
    return new Observable((observer: any) => {
      const translations = JSON.parse(readFileSync(`${process.cwd()}${this.prefix}${lang}${this.suffix}`, 'utf8'));

      observer.next(translations);
      observer.complete();
    });
  }
}
