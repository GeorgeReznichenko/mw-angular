import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../../modules/layout/layout.module';
import { DocsPageContainerComponent } from './docs-page-container.component';
import { DocsPageRoutingModule } from './docs-page-routing.module';

@NgModule({
  imports: [CommonModule, DocsPageRoutingModule, LayoutModule],
  declarations: [DocsPageContainerComponent],
})
export class DocsPageModule {}
