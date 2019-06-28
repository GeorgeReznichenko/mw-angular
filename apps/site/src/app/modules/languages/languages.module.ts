import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { CurrentLanguageService } from './services/current-language.service';

@NgModule({
  imports: [SharedModule],
  declarations: [LanguageSelectorComponent],
  exports: [LanguageSelectorComponent],
})
export class LanguagesModule {
  constructor(currentLanguageService: CurrentLanguageService) {
    currentLanguageService.init();
  }
}
