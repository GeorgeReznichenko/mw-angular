import { ComplexFilterComponentModel } from './complex-filter-component.model';

export interface ComplexFilterConfigModel {
  defaultFilters: ComplexFilterComponentModel[];
  dynamicFilters?: ComplexFilterComponentModel[];
}
