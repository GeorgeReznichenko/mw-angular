import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplexFilterContainerComponent } from './complex-filter-container.component';
import { ComplexFilterComponent } from './components/complex-filter/complex-filter.component';
import { ComplexFilterElementTextModule } from './modules/complex-filter-element-text/complex-filter-element-text.module';

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
    ComplexFilterElementTextModule,
  ],
})
export class ComplexFilterModule {
}
