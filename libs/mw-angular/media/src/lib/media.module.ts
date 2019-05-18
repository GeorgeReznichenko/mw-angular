import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WebcamComponent } from './components/webcam/webcam.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    WebcamComponent,
  ],
  exports: [
    WebcamComponent,
  ],
})
export class MediaModule {
}
