import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { ComplexFilterComponentDataModel } from '../entities/complex-filter-component-data.model';
import { COMPLEX_FILTER_COMPONENT_DATA } from '../entities/complex-filter-component-data.token';

@Injectable({
  providedIn: 'root'
})
export class ComplexFilterPortalCreationService {
  constructor(private injector: Injector) {
  }

  createPortal(component: ComponentType<any>, data: ComplexFilterComponentDataModel = {}): ComponentPortal<any> {
    return new ComponentPortal(
      component,
      null,
      this.createInjector(data),
    );
  }

  private createInjector(data: ComplexFilterComponentDataModel): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(COMPLEX_FILTER_COMPONENT_DATA, data);
    return new PortalInjector(this.injector, injectorTokens);
  }
}
