import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {
  @Input()
  type: 'box' | 'line';
}
