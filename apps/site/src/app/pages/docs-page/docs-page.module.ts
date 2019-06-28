import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { DocsPageComponent } from './components/docs-page/docs-page.component';
import { DocsPageContainerComponent } from './docs-page-container.component';
import { DocsPageRoutingModule } from './docs-page-routing.module';
import { DocsLayoutModule } from './modules/docs-layout/docs-layout.module';

@NgModule({
  imports: [SharedModule, DocsPageRoutingModule, DocsLayoutModule],
  declarations: [DocsPageContainerComponent, DocsPageComponent],
})
export class DocsPageModule {}
