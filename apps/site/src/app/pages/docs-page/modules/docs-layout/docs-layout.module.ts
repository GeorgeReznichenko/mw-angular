import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocsLayoutComponent } from './components/docs-layout/docs-layout.component';
import { DocsLayoutContainerComponent } from './docs-layout-container.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [DocsLayoutContainerComponent, DocsLayoutComponent],
  exports: [DocsLayoutContainerComponent],
})
export class DocsLayoutModule {}
