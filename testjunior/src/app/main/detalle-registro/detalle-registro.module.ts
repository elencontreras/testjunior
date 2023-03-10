import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRegistroRoutingModule } from './detalle-registro-routing.module';
import { DetalleRegistroComponent } from './detalle-registro.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    DetalleRegistroComponent
  ],
  imports: [
    CommonModule,
    DetalleRegistroRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DetalleRegistroModule { }
