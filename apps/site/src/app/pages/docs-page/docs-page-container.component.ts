import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MwMetaService } from '@mw-angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-base-layout-container>
      <h1>Documentation</h1>
    </app-base-layout-container>
  `,
})
export class DocsPageContainerComponent implements OnInit {
  constructor(private mwMetaService: MwMetaService) {}

  ngOnInit(): void {
    this.mwMetaService.setTitle('Documentation');
  }
}
