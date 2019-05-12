import { InjectionToken } from '@angular/core';
import { ComplexFilterComponentDataModel } from './complex-filter-component-data.model';

export const COMPLEX_FILTER_COMPONENT_DATA = new InjectionToken<ComplexFilterComponentDataModel>(
  'COMPLEX_FILTER_COMPONENT_DATA',
);
