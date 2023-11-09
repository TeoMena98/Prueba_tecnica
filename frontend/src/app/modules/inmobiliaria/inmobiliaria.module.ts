import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmobiliariaRoutingModule } from './inmobiliaria-routing.module';
import { InmobiliariaComponent } from './inmobiliaria.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { HomeComponent } from './home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { MarcadorDialogComponent } from './compras/marcador-dialog/marcador-dialog.component';

@NgModule({
  declarations: [
    InmobiliariaComponent,
    VentasComponent,
    ComprasComponent,
    HomeComponent,
    MarcadorDialogComponent,
  ],
  imports: [
    CommonModule,
    InmobiliariaRoutingModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class InmobiliariaModule {}
