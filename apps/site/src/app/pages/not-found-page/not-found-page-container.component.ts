import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MwMetaService } from '@mw-angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-server-error code="404" description="page not found"></app-server-error>
  `,
})
export class NotFoundPageContainerComponent implements OnInit {
  constructor(private mwMetaService: MwMetaService) {}

  ngOnInit(): void {
    this.mwMetaService.setTitle('Page not found');
  }
}
