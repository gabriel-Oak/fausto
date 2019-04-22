import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { StoreFormComponent } from './store/store-form/store-form.component';
import { EnderecoFormComponent } from './endereco/endereco-form/endereco-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';

const routes: Routes = [
  { path: 'produto', component: ProdutoListComponent },
  { path: 'produto/novo', component: ProdutoFormComponent },
  { path: 'produto/:id', component: ProdutoFormComponent },

  { path: 'loja', component: StoreListComponent },
  { path: 'loja/novo', component: StoreFormComponent },
  { path: 'loja/:id', component: StoreFormComponent },

  { path: 'cliente', component: ClienteListComponent },
  { path: 'cliente/novo', component: ClienteFormComponent },
  { path: 'cliente/:id', component: ClienteFormComponent },

  { path: 'pedido', component: PedidoListComponent },
  { path: 'pedido/novo', component: PedidoFormComponent },
  { path: 'pedido/:id', component: PedidoFormComponent },

  { path: 'endereco/novo', component: EnderecoFormComponent },
  { path: 'endereco/:id', component: EnderecoFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
