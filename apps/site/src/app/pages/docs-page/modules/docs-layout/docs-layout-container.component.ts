import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MetaService } from '../../../../modules/core/services/meta.service';

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

  constructor(private metaService: MetaService) {
    this.pageTitle$ = this.metaService.getPageTitle();
  }
}
