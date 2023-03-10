import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleRegistroComponent } from './detalle-registro.component';

const routes: Routes = [{ path: '', component: DetalleRegistroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRegistroRoutingModule { }
