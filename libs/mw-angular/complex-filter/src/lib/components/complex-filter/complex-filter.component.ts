import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mw-complex-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './complex-filter.component.html',
  styleUrls: ['./complex-filter.component.scss'],
})
export class ComplexFilterComponent {
}
