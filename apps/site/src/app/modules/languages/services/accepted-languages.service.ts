import { Injectable } from '@angular/core';
import { Language } from '../entities/language';

@Injectable({
  providedIn: 'root',
})
export class AcceptedLanguagesService {
  getAcceptedLangs(): Language[] {
    return [
      {
        id: 'en',
        label: 'En',
      },
      {
        id: 'ru',
        label: 'Ru',
      },
    ];
  }
}
