import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-base-layout-container>
      <router-outlet></router-outlet>
    </app-base-layout-container>
  `,
})
export class AppContainerComponent {}
