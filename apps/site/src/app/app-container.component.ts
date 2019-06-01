import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Welcome to site!</h1>
    <router-outlet></router-outlet>

    <div class="container">
      <div class="row">
        <div class="col col-sm-12" style="background-color: aquamarine">Col 1</div>
        <div class="col col-sm-12" style="background-color: blueviolet">Col 2</div>
      </div>
    </div>
  `,
})
export class AppContainerComponent {}
