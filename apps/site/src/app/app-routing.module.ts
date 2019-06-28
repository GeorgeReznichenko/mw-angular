import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'docs',
  },
  {
    path: 'docs',
    loadChildren: () => import('./pages/docs-page/docs-page.module').then((m) => m.DocsPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
})
export class AppRoutingModule {}
