import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ServerErrorComponent, NotFoundErrorComponent],
  exports: [ServerErrorComponent],
})
export class ErrorsModule {}
