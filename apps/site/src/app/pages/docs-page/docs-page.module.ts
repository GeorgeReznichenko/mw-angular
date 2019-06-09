import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseLayoutModule } from '../../modules/base-layout/base-layout.module';
import { DocsPageComponent } from './components/docs-page/docs-page.component';
import { DocsPageContainerComponent } from './docs-page-container.component';
import { DocsPageRoutingModule } from './docs-page-routing.module';

@NgModule({
  imports: [CommonModule, DocsPageRoutingModule, BaseLayoutModule],
  declarations: [DocsPageContainerComponent, DocsPageComponent],
})
export class DocsPageModule {}
