import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent {
  @Input() code: any;
  @Input() description: string;
}
