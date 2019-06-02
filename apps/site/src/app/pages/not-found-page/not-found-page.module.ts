import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { NotFoundPageContainerComponent } from './not-found-page-container.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

@NgModule({
  imports: [CommonModule, NotFoundPageRoutingModule, NotFoundModule],
  declarations: [NotFoundPageContainerComponent],
})
export class NotFoundPageModule {}
