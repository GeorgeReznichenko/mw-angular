import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialComplexFilterElementOverlayComponent } from './components/material-complex-filter-element-overlay/material-complex-filter-element-overlay.component';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [MaterialComplexFilterElementOverlayComponent],
  exports: [MaterialComplexFilterElementOverlayComponent],
})
export class MaterialComplexFilterElementOverlayModule {}
