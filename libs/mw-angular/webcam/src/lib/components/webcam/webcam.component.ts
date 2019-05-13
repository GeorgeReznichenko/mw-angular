import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { WebcamImage } from '../../entities/webcam-image';

@Component({
  selector: 'mw-webcam',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss'],
})
export class WebcamComponent implements AfterViewInit {
  @Input() width = 640;
  @Input() height = 480;

  @Output() imageCaptureEvent = new EventEmitter<WebcamImage>();

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

  captureImage(): void {
    const videoElement = this.video.nativeElement;
    const canvasElement = this.canvas.nativeElement;

    canvasElement.getContext('2d')
      .drawImage(videoElement, 0, 0, this.width, this.height);

    const image = new WebcamImage(canvasElement.toDataURL());

    this.imageCaptureEvent.emit(image);
  }
}
