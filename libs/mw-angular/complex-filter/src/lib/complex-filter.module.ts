import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplexFilterComponent } from './components/complex-filter/complex-filter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ComplexFilterComponent,
  ],
  exports: [
    ComplexFilterComponent,
  ],
})
export class ComplexFilterModule {
}
