import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inmobiliaria',
    pathMatch: 'full',
  },
  {
    path: 'inmobiliaria',
    loadChildren: () =>
      import('./modules/inmobiliaria/inmobiliaria-routing.module').then(
        (mod) => mod.InmobiliariaRoutingModule
      ),
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
