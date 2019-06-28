import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Language } from '../entities/language';
import { AcceptedLanguagesService } from './accepted-languages.service';
import { DefaultLanguageService } from './default-language.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentLanguageService {
  private currentLangIdSubject = new ReplaySubject<string>(1);

  constructor(
    private router: Router,
    private defaultLanguageService: DefaultLanguageService,
    private acceptedLanguagesService: AcceptedLanguagesService,
  ) {}

  init(): void {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(({ url }: NavigationEnd) => {
        const currentLangId = url.split('/')[1];
        const acceptedLangIds = this.acceptedLanguagesService.getAcceptedLangs().map((lang: Language) => lang.id);

        if (!acceptedLangIds.includes(currentLangId)) {
          const trimUrl = url === '/' ? '' : url;
          this.router.navigateByUrl(`/${this.defaultLanguageService.getDefaultLangId()}${trimUrl}`);
          return;
        }

        this.setCurrentLangId(currentLangId);
      });
  }

  getCurrentLang(): Observable<Language> {
    return this.currentLangIdSubject.pipe(
      distinctUntilChanged(),
      map((currentLangId: string) => {
        const currentLang = this.acceptedLanguagesService
          .getAcceptedLangs()
          .find((lang: Language) => lang.id === currentLangId);

        if (currentLang === undefined) {
          throw new Error(`Language id: ${currentLangId} does not accepted.`);
        }

        return currentLang;
      }),
    );
  }

  private setCurrentLangId(langId: string): void {
    this.currentLangIdSubject.next(langId);
  }
}
