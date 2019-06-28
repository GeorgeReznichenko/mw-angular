import { NgModule } from '@angular/core';
import { ErrorsModule } from '../errors/errors.module';
import { LanguagesModule } from '../languages/languages.module';
import { SharedModule } from '../shared/shared.module';
import { BaseLayoutContainerComponent } from './base-layout-container.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';

@NgModule({
  imports: [SharedModule, ErrorsModule, LanguagesModule],
  declarations: [BaseLayoutContainerComponent, BaseLayoutComponent],
  exports: [BaseLayoutContainerComponent],
})
export class BaseLayoutModule {}
