import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MwMetaService } from '@mw-angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-docs-layout-container>
      <app-docs-page></app-docs-page>
    </app-docs-layout-container>
  `,
})
export class DocsPageContainerComponent implements OnInit {
  constructor(private mwMetaService: MwMetaService) {}

  ngOnInit(): void {
    this.mwMetaService.setTitle('Documentation');
  }
}
