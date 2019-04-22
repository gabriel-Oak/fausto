import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // Injeção de dependência nos parâmetros do construtor
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:8000/products');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:8000/products/' + id);
  }

  novo(produto) {
    return this.http.put('http://localhost:8000/products', produto);
  }

  atualizar(produto) {
    return this.http.patch('http://localhost:8000/products/' + produto._id, produto);
  }

  excluir(id:String) {
    return this.http.delete('http://localhost:8000/products/' + id);
  }

}
