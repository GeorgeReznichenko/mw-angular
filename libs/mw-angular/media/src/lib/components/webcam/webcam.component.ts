import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mw-webcam',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss'],
})
export class WebcamComponent implements AfterViewInit {
  ngAfterViewInit(): void {}
}
