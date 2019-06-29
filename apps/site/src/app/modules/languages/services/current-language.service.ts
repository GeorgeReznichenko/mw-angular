import { Injectable } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { MwTagService } from '@mw-angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Language } from '../../../../cross-platform/languages/entities/language';
import { AcceptedLanguagesService } from '../../../../cross-platform/languages/services/accepted-languages.service';
import { DefaultLanguageService } from '../../../../cross-platform/languages/services/default-language.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentLanguageService {
  private currentLangIdSubject = new ReplaySubject<string>(1);
  private defaultLanguageService: DefaultLanguageService;
  private acceptedLanguagesService: AcceptedLanguagesService;

  constructor(private router: Router, private mwTagService: MwTagService) {
    this.defaultLanguageService = new DefaultLanguageService();
    this.acceptedLanguagesService = new AcceptedLanguagesService();
  }

  init(): void {
    this.initLangFromUrl();
    this.initHtmlTagChange();
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

  private initLangFromUrl(): void {
    this.router.events
      .pipe(filter((event: Event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe(({ url }: NavigationStart) => {
        const currentLangId = url.split('/')[1];
        const acceptedLangIds = this.acceptedLanguagesService.getAcceptedLangIds();

        if (!acceptedLangIds.includes(currentLangId)) {
          const trimUrl = url === '/' ? '' : url;
          this.router.navigateByUrl(`/${this.defaultLanguageService.getDefaultLangId()}${trimUrl}`);
          return;
        }

        this.setCurrentLangId(currentLangId);
      });
  }

  private initHtmlTagChange(): void {
    this.getCurrentLang().subscribe((currentLang: Language) => {
      this.mwTagService.updateTag('html', 'lang', currentLang.id);
    });
  }
}
