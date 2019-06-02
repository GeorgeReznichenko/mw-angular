import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundContainerComponent } from './not-found-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NotFoundContainerComponent, NotFoundComponent],
  exports: [NotFoundContainerComponent],
})
export class NotFoundModule {}
