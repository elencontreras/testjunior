import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path:"",
    component: LayoutComponent,
    children:[
      { path: 'registro', loadChildren: () => import('./main/registro/registro.module').then(m => m.RegistroModule) },
  
      { path: 'registro/:id', loadChildren: () => import('./main/detalle-registro/detalle-registro.module').then(m => m.DetalleRegistroModule) },

      { path: '', redirectTo: '/registro', pathMatch: 'full' },
    
    ]
  },

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
