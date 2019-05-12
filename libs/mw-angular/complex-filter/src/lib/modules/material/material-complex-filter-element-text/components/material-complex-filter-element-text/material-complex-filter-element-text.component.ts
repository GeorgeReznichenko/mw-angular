import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ComplexFilterComponentDataModel } from '../../../../../entities/complex-filter-component-data.model';
import { COMPLEX_FILTER_COMPONENT_DATA } from '../../../../../entities/complex-filter-component-data.token';

@Component({
  selector: 'mw-material-complex-filter-element-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './material-complex-filter-element-text.component.html',
  styleUrls: ['./material-complex-filter-element-text.component.scss'],
})
export class MaterialComplexFilterElementTextComponent {
  isOpened = false;

  constructor(@Inject(COMPLEX_FILTER_COMPONENT_DATA) private data: ComplexFilterComponentDataModel) {
  }
}
