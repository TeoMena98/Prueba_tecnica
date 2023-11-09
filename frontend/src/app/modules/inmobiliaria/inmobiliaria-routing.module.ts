import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/AuthGuard';
import { InmobiliariaComponent } from './inmobiliaria.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: InmobiliariaComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'ventas',
        component: VentasComponent,
      },
      {
        path: 'compras',
        component: ComprasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmobiliariaRoutingModule {}
