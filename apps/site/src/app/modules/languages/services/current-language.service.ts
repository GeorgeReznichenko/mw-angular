import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map, take, withLatestFrom } from 'rxjs/operators';
import { Language } from '../entities/language';
import { AcceptedLanguagesService } from './accepted-languages.service';
import { DefaultLanguageService } from './default-language.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentLanguageService {
  private currentLangIdSubject = new ReplaySubject<string>(1);

  constructor(
    private defaultLanguageService: DefaultLanguageService,
    private acceptedLanguagesService: AcceptedLanguagesService,
  ) {
    this.initDefaultLangId();
  }

  private initDefaultLangId(): void {
    this.defaultLanguageService
      .getDefaultLangId()
      .pipe(take(1))
      .subscribe((defaultLangId: string) => this.setCurrentLangId(defaultLangId));
  }

  getCurrentLang(): Observable<Language> {
    return this.currentLangIdSubject.pipe(
      distinctUntilChanged(),
      withLatestFrom(this.acceptedLanguagesService.getAcceptedLangs()),
      map(([langId, acceptedLangs]) => {
        const currentLang = acceptedLangs.find((lang: Language) => lang.id === langId);

        if (currentLang === undefined) {
          throw new Error(`Language id: ${langId} does not accepted.`);
        }

        return currentLang;
      }),
    );
  }

  setCurrentLangId(langId: string): void {
    this.currentLangIdSubject.next(langId);
  }
}
