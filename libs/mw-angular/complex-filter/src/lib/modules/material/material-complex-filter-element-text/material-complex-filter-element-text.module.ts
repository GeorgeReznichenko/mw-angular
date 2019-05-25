import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialComplexFilterElementLabelModule } from '../material-complex-filter-element-label/material-complex-filter-element-label.module';
import { MaterialComplexFilterElementOverlayModule } from '../material-complex-filter-element-overlay/material-complex-filter-element-overlay.module';
import { MaterialComplexFilterElementTextComponent } from './components/material-complex-filter-element-text/material-complex-filter-element-text.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MaterialComplexFilterElementLabelModule,
    MaterialComplexFilterElementOverlayModule,
  ],
  declarations: [MaterialComplexFilterElementTextComponent],
  entryComponents: [MaterialComplexFilterElementTextComponent],
})
export class MaterialComplexFilterElementTextModule {}
