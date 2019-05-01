import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mw-complex-filter></mw-complex-filter>
  `,
})
export class ComplexFilterContainerComponent {
}
