import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    // loadChildren: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
    loadChildren: './pages/not-found-page/not-found-page.module#NotFoundPageModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
