import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-docs-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './docs-layout.component.html',
  styleUrls: ['./docs-layout.component.scss'],
})
export class DocsLayoutComponent {
  @Input() pageTitle: string;
}
