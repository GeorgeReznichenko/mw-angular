import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // DON'T CHANGE "app-not-found-container", it's used to determine 404 HTTP status code -->
  selector: 'app-not-found-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-not-found></app-not-found>
  `,
})
export class NotFoundContainerComponent {}
