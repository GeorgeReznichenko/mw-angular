import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MetaService } from '@mw-angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-not-found-container></app-not-found-container>
  `,
})
export class NotFoundPageContainerComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setTitle('Page not found');
  }
}
