import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MwMetaService } from '@mw-angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-docs-layout-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-docs-layout [pageTitle]="pageTitle$ | async">
      <ng-content></ng-content>
    </app-docs-layout>
  `,
})
export class DocsLayoutContainerComponent {
  pageTitle$: Observable<string>;

  constructor(private mwMetaService: MwMetaService) {
    this.pageTitle$ = this.mwMetaService.getPageTitle();
  }
}
