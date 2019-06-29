import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MwHtmlService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: any) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateTags(selector: string, attributeName: string, attributeValue: string): void {
    this.document.querySelectorAll(selector).forEach((element: Element) => {
      this.renderer.setAttribute(element, attributeName, attributeValue);
    });
  }
}
