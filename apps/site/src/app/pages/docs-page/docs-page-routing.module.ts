import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsPageContainerComponent } from './docs-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: DocsPageContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DocsPageRoutingModule {}
