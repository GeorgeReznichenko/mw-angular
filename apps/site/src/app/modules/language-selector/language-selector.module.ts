import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { LanguageSelectorContainerComponent } from './language-selector-container.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LanguageSelectorComponent, LanguageSelectorContainerComponent],
  exports: [LanguageSelectorContainerComponent],
})
export class LanguageSelectorModule {}
