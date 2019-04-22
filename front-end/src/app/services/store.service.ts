import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { 
    
   }
   listar() {
    return this.http.get('http://localhost:8000/store');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:8000/store/' + id);
  }

  novo(loja) {
    return this.http.put('http://localhost:8000/store', loja);
  }

  atualizar(loja) {
    return this.http.patch('http://localhost:8000/store/' + loja._id, loja);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:8000/store/' + id);
  }
}
