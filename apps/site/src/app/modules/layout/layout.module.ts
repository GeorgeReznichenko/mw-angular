import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsModule } from '../errors/errors.module';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutContainerComponent } from './layout-container.component';

@NgModule({
  imports: [CommonModule, MaterialModule, ErrorsModule],
  declarations: [LayoutContainerComponent, LayoutComponent],
  exports: [LayoutContainerComponent],
})
export class LayoutModule {}
