import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaultLanguageService {
  static readonly defaultLangId = 'en';

  getDefaultLangId(): string {
    return DefaultLanguageService.defaultLangId;
  }
}
