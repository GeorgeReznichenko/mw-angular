import { Language } from '../entities/language';

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

  getAcceptedLangIds(): string[] {
    return this.getAcceptedLangs().map((lang: Language) => lang.id);
  }
}
