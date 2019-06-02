import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../types/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private theme$ = new BehaviorSubject<Theme>(Theme.LightTheme);
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, private overlayContainer: OverlayContainer) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  getSelectedTheme(): Observable<Theme> {
    return this.theme$.asObservable();
  }

  setSelectedTheme(theme: Theme): void {
    this.loadStyles(theme);
    this.setOverlayClass(theme);
    this.theme$.next(theme);
  }

  private loadStyles(theme: Theme): void {
    const stylesElement = this.renderer.selectRootElement('link#theme');
    this.renderer.setAttribute(stylesElement, 'href', `${theme}.css`);
  }

  private setOverlayClass(theme: Theme): void {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme);
  }
}
