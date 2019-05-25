import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Welcome to site!</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppContainerComponent {}
