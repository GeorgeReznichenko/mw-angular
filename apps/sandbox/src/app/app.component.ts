import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComplexFilterConfigModel, MaterialComplexFilterElementTextComponent } from '@mw-angular/complex-filter';
import { WebcamImage } from '../../../../libs/mw-angular/webcam/src/lib/entities/webcam-image';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: ComplexFilterConfigModel = {
    defaultFilters: [
      {
        component: MaterialComplexFilterElementTextComponent,
      },
    ],
  };

  onImageCaptureEvent(data: WebcamImage) {
    console.log(data.getBase64());
  }
}
