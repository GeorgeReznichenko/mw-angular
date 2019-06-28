import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DefaultLanguageService {
  private readonly defaultLangId = 'en';

  getDefaultLangId(): Observable<string> {
    return of(this.defaultLangId);
  }
}
