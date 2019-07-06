import { NgModule } from '@angular/core';
import { ErrorsModule } from '../errors/errors.module';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';
import { SharedModule } from '../shared/shared.module';
import { BaseLayoutContainerComponent } from './base-layout-container.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
  imports: [SharedModule, ErrorsModule, LanguageSelectorModule],
  declarations: [BaseLayoutContainerComponent, BaseLayoutComponent, TopMenuComponent],
  exports: [BaseLayoutContainerComponent],
})
export class BaseLayoutModule {}
