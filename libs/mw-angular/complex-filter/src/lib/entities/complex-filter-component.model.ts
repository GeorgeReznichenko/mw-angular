import { ComplexFilterComponentConfigModel } from './complex-filter-component-config.model';

export interface ComplexFilterComponentModel {
  id: string;
  component: any;
  config?: ComplexFilterComponentConfigModel;
}
