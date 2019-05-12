import { ComponentType } from '@angular/core/src/render3';

export interface ComplexFilterComponentModel {
  id: string;
  component: ComponentType<{}>;
  config: object;
}
