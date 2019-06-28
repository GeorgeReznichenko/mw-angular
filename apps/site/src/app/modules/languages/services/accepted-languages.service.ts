import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../entities/language';

@Injectable({
  providedIn: 'root',
})
export class AcceptedLanguagesService {
  getAcceptedLangs(): Observable<Language[]> {
    return of([
      {
        id: 'en',
        label: 'En',
      },
      {
        id: 'ru',
        label: 'Ru',
      },
    ]);
  }
}
