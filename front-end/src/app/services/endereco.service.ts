import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get('http://localhost:8000/Address');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:8000/Address/' + id);
  }

  novo(endereco) {
    return this.http.put('http://localhost:8000/Address', endereco);
  }

  atualizar(endereco) {
    return this.http.patch('http://localhost:8000/Address/' + endereco._id, endereco);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:8000/Address/' + id);
  }
}
