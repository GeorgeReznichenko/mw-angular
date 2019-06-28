import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServerErrorComponent } from './components/server-error/server-error.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ServerErrorComponent],
  exports: [ServerErrorComponent],
})
export class ErrorsModule {}
