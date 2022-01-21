import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasNovaComponent } from './pessoas-nova/pessoas-nova.component';
import { PessoasEditarComponent } from './pessoas-editar/pessoas-editar.component';

const routes: Routes = [
  {
    path: 'pessoas',
    component: PessoasComponent,
    data: { title: 'Lista' }
  },
  {
    path: 'pessoas-nova',
    component: PessoasNovaComponent,
    data: { title: 'Adicionar' }
  },
  {
    path: 'pessoas-editar/:id',
    component: PessoasEditarComponent,
    data: { title: 'Editar' }
  },
  {
    path: '',
    redirectTo: '/pessoas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
