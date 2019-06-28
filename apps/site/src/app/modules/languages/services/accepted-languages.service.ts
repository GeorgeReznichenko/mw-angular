import { Injectable } from '@angular/core';
import { Language } from '../entities/language';

@Injectable({
  providedIn: 'root',
})
export class AcceptedLanguagesService {
  static readonly acceptedLangs = [
    {
      id: 'en',
      label: 'En',
    },
    {
      id: 'ru',
      label: 'Ru',
    },
  ];

  getAcceptedLangs(): Language[] {
    return AcceptedLanguagesService.acceptedLangs;
  }
}
