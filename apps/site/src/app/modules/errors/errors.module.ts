import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServerErrorComponent } from './components/server-error/server-error.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ServerErrorComponent],
  exports: [ServerErrorComponent],
})
export class ErrorsModule {}
