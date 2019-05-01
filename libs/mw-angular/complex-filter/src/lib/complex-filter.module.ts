import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplexFilterContainerComponent } from './complex-filter-container.component';
import { ComplexFilterComponent } from './components/complex-filter/complex-filter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ComplexFilterContainerComponent,
    ComplexFilterComponent,
  ],
  exports: [
    ComplexFilterContainerComponent,
  ],
})
export class ComplexFilterModule {
}
