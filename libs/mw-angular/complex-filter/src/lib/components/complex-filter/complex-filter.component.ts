import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComplexFilterPortalModel } from '../../entities/complex-filter-portal.model';

@Component({
  selector: 'mw-complex-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.scss'],
})
export class ComplexFilterComponent {
  @Input() defaultPortalModels: ComplexFilterPortalModel[] = [];
  @Input() dynamicPortalModels: ComplexFilterPortalModel[] = [];
}
