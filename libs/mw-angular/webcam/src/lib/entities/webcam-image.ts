export class WebcamImage {
  public constructor(private imageAsDataUrl: string) {
  }

  getBase64(): string {
    return this.imageAsDataUrl;
  }
}
