import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MwMetaService } from '@mw-angular/core';

@Component({
  selector: 'app-docs-layout-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-base-layout-container>
      <app-docs-layout [pageTitle]="pageTitle$ | async">
        <ng-content></ng-content>
      </app-docs-layout>
    </app-base-layout-container>
  `,
})
export class DocsLayoutContainerComponent {
  pageTitle$: Observable<string>;

  constructor(private mwMetaService: MwMetaService) {
    this.pageTitle$ = this.mwMetaService.getPageTitle();
  }
}
