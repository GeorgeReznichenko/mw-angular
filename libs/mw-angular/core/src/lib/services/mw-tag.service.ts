import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MwTagService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: any) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateTag(selector: string, attributeName: string, attributeValue: string): void {
    this.renderer.setAttribute(this.document.querySelector(selector), attributeName, attributeValue);
  }
}
