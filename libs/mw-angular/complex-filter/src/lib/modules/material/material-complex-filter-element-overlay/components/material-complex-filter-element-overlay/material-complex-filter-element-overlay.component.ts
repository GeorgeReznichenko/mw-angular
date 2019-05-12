import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-complex-filter-element-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './material-complex-filter-element-overlay.component.html',
  styleUrls: ['./material-complex-filter-element-overlay.component.scss'],
})
export class MaterialComplexFilterElementOverlayComponent {
  @Input() overlayOrigin: CdkOverlayOrigin;
  @Input() isOpened = false;

  @Output() closeEvent = new EventEmitter<void>();
}
