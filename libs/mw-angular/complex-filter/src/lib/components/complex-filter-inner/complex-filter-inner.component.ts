import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComplexFilterPortalModel } from '../../entities/complex-filter-portal.model';

@Component({
  selector: 'mw-complex-filter-inner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './complex-filter-inner.component.html',
  styleUrls: ['./complex-filter-inner.component.scss'],
})
export class ComplexFilterInnerComponent {
  @Input() defaultPortalModels: ComplexFilterPortalModel[] = [];
  @Input() dynamicPortalModels: ComplexFilterPortalModel[] = [];
}
