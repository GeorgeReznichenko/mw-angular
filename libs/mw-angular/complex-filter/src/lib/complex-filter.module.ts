import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplexFilterContainerComponent } from './complex-filter-container.component';
import { ComplexFilterComponent } from './components/complex-filter/complex-filter.component';
import { MaterialComplexFilterElementsModule } from './modules/material/material-complex-filter-elements.module';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
  ],
  declarations: [
    ComplexFilterContainerComponent,
    ComplexFilterComponent,
  ],
  exports: [
    ComplexFilterContainerComponent,
    MaterialComplexFilterElementsModule,
  ],
})
export class ComplexFilterModule {
}
