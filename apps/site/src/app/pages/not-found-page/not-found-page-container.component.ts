import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MwMetaService } from '@mw-angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-not-found-container></app-not-found-container>
  `,
})
export class NotFoundPageContainerComponent implements OnInit {
  constructor(private mwMetaService: MwMetaService) {}

  ngOnInit(): void {
    this.mwMetaService.setTitle('Page not found');
  }
}
