import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../../../cross-platform/languages/entities/language';
import { AcceptedLanguagesService } from '../../../cross-platform/languages/services/accepted-languages.service';
import { CurrentLanguageService } from '../translations/services/current-language.service';
import { NavigateLanguageService } from '../translations/services/navigate-language.service';

@Component({
  selector: 'app-language-selector-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-language-selector
      [currentLang]="currentLang$ | async"
      [acceptedLangs]="acceptedLangs"
      (langSelectEvent)="onLangSelectEvent($event)"
    ></app-language-selector>
  `,
})
export class LanguageSelectorContainerComponent {
  currentLang$: Observable<Language>;
  acceptedLangs: Language[];

  private acceptedLanguagesService: AcceptedLanguagesService;

  constructor(
    private currentLanguageService: CurrentLanguageService,
    private navigateLanguageService: NavigateLanguageService,
  ) {
    this.acceptedLanguagesService = new AcceptedLanguagesService();

    this.currentLang$ = this.currentLanguageService.getCurrentLang();
    this.acceptedLangs = this.acceptedLanguagesService.getAcceptedLangs();
  }

  onLangSelectEvent(lang: Language) {
    this.navigateLanguageService.navigateSameUrlAnotherLang(lang.id);
  }
}
