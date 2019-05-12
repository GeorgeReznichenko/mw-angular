import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-element-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './material-complex-filter-element-label.component.html',
  styleUrls: ['./material-complex-filter-element-label.component.scss'],
})
export class MaterialComplexFilterElementLabelComponent {
  @Input() isOpened = false;

  @Output() openEvent = new EventEmitter<void>();
}
