import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LanguageSelectorComponent],
  exports: [LanguageSelectorComponent],
})
export class LanguagesModule {}
