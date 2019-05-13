import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'mw-webcam',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss'],
})
export class WebcamComponent implements AfterViewInit {
  @Input() width = 640;
  @Input() height = 480;

  @ViewChild('video')
  private video: ElementRef;

  @ViewChild('canvas')
  private canvas: ElementRef;

  ngAfterViewInit(): void {
    this.initWebcam();
  }

  private initWebcam(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then((stream: MediaStream) => {
          const videoElement = this.video.nativeElement;
          videoElement.srcObject = stream;
          videoElement.play();
        });
    }
  }
}
