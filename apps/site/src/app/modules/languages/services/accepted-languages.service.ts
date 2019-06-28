import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../entities/language';

@Injectable({
  providedIn: 'root',
})
export class AcceptedLanguagesService {
  getAcceptedLanguages(): Observable<Language[]> {
    return of([
      {
        id: 'en',
        label: 'English',
      },
      {
        id: 'ru',
        label: 'Русский',
      },
    ]);
  }
}
