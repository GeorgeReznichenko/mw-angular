import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorsModule } from '../errors/errors.module';
import { MaterialModule } from '../material/material.module';
import { BaseLayoutContainerComponent } from './base-layout-container.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, ErrorsModule],
  declarations: [BaseLayoutContainerComponent, BaseLayoutComponent],
  exports: [BaseLayoutContainerComponent],
})
export class BaseLayoutModule {}
