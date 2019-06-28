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

const langRoutes: Routes = [
  {
    path: ':langId',
    children: routes,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(langRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
