import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../cross-platform/languages/entities/language';
import { DefaultLanguageService } from '../cross-platform/languages/services/default-language.service';
import { CurrentLanguageService } from './modules/translations/services/current-language.service';

@Component({
  selector: 'app-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-base-layout-container>
      <router-outlet></router-outlet>
    </app-base-layout-container>
  `,
})
export class AppContainerComponent {
  private defaultLanguageService: DefaultLanguageService;

  constructor(private currentLanguageService: CurrentLanguageService, private translateService: TranslateService) {
    this.defaultLanguageService = new DefaultLanguageService();

    this.initTranslations();
  }

  private initTranslations(): void {
    this.translateService.setDefaultLang(this.defaultLanguageService.getDefaultLangId());

    this.currentLanguageService.getCurrentLang().subscribe((currentLang: Language) => {
      this.translateService.use(currentLang.id);
    });
  }
}
