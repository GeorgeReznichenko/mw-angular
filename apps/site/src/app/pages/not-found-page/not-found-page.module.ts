import { NgModule } from '@angular/core';
import { ErrorsModule } from '../../modules/errors/errors.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { NotFoundPageContainerComponent } from './not-found-page-container.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

@NgModule({
  imports: [SharedModule, NotFoundPageRoutingModule, ErrorsModule],
  declarations: [NotFoundPageContainerComponent],
})
export class NotFoundPageModule {}
