import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageContainerComponent } from './not-found-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPageContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class NotFoundPageRoutingModule {}
