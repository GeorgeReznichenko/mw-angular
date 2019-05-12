import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComplexFilterConfigModel, MaterialComplexFilterElementTextComponent } from '@mw-angular/complex-filter';

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
        id: 'id',
        component: MaterialComplexFilterElementTextComponent,
      },
    ],
  };
}
