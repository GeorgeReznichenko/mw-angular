import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MwMetaService } from '@mw-angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-not-found-error></app-not-found-error>
  `,
})
export class NotFoundPageContainerComponent implements OnInit {
  constructor(private mwMetaService: MwMetaService) {}

  ngOnInit(): void {
    this.mwMetaService.setTitle('Page not found');
  }
}
