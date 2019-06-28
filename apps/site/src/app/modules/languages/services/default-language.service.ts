import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaultLanguageService {
  getDefaultLangId(): string {
    return 'en';
  }
}
