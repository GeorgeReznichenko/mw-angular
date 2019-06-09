import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocsPageComponent } from './components/docs-page/docs-page.component';
import { DocsPageContainerComponent } from './docs-page-container.component';
import { DocsPageRoutingModule } from './docs-page-routing.module';
import { DocsLayoutModule } from './modules/docs-layout/docs-layout.module';

@NgModule({
  imports: [CommonModule, DocsPageRoutingModule, DocsLayoutModule],
  declarations: [DocsPageContainerComponent, DocsPageComponent],
})
export class DocsPageModule {}
