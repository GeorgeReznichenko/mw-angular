import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import {
  MaterialComplexFilterElementLabelComponent
} from './components/material-complex-filter-element-label/material-complex-filter-element-label.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    MaterialComplexFilterElementLabelComponent,
  ],
  exports: [
    MaterialComplexFilterElementLabelComponent,
  ],
})
export class MaterialComplexFilterElementLabelModule {
}
