import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplexFilterComponent } from './complex-filter.component';
import { ComplexFilterInnerComponent } from './components/complex-filter-inner/complex-filter-inner.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [ComplexFilterComponent, ComplexFilterInnerComponent],
  exports: [ComplexFilterComponent],
})
export class ComplexFilterModule {}
