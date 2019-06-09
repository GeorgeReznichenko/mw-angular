import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseLayoutModule } from '../../modules/base-layout/base-layout.module';
import { ErrorsModule } from '../../modules/errors/errors.module';
import { NotFoundPageContainerComponent } from './not-found-page-container.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

@NgModule({
  imports: [CommonModule, NotFoundPageRoutingModule, ErrorsModule, BaseLayoutModule],
  declarations: [NotFoundPageContainerComponent],
})
export class NotFoundPageModule {}
