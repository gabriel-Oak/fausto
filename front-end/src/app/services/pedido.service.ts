import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { 
    
  }
  listar() {
   return this.http.get('http://localhost:8000/orders');
 }

 obterUm(id: String) {
   return this.http.get('http://localhost:8000/orders/' + id);
 }

 novo(pedido) {
   return this.http.put('http://localhost:8000/orders', pedido);
 }

 atualizar(pedido) {
   return this.http.patch('http://localhost:8000/orders/' + pedido._id, pedido);
 }

 excluir(id: String) {
   return this.http.delete('http://localhost:8000/orders/' + id);
 }
}