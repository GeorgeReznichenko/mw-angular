export class WebcamImage {
  public constructor(private imageAsDataUrl: string) {
  }

  getAsDataUrl(): string {
    return this.imageAsDataUrl;
  }
}
