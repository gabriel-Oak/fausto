import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { 
    
  }
  listar() {
   return this.http.get('http://localhost:8000/customers');
 }

 obterUm(id: String) {
   return this.http.get('http://localhost:8000/customers/' + id);
 }

 novo(cliente) {
   return this.http.put('http://localhost:8000/customers', cliente);
 }

 atualizar(cliente) {
   return this.http.patch('http://localhost:8000/customers/' + cliente._id, cliente);
 }

 excluir(id: String) {
   return this.http.delete('http://localhost:8000/customers/' + id);
 }
}

