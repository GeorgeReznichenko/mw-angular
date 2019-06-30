import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-docs-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.scss'],
})
export class DocsPageComponent {
  @Input() currentLangId: string;
}
