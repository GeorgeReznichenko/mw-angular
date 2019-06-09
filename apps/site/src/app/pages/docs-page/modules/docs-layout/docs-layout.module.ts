import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseLayoutModule } from '../../../../modules/base-layout/base-layout.module';
import { DocsLayoutComponent } from './components/docs-layout/docs-layout.component';
import { DocsLayoutContainerComponent } from './docs-layout-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, BaseLayoutModule],
  declarations: [DocsLayoutContainerComponent, DocsLayoutComponent],
  exports: [DocsLayoutContainerComponent],
})
export class DocsLayoutModule {}
