import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../../services/produto.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private produtoSrv: ProdutoService,
    private snackBar: MatSnackBar
  ) { }

  public titulo: String = 'Novo produto';

  public produto: any = {conjunto: false};


  ngOnInit() {

    // Pedimos para que o ActivatedRoute busque para nós os parâmetros da url
    this.actRoute.params.subscribe(  // Chamada assíncrona
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // 1) Vamos buscar os dados do objeto no back-end
          this.produtoSrv.obterUm(params.id).subscribe(
            obj => { // Callback se OK
              this.produto = obj;
              console.log(obj);
              this.titulo = 'Editar produto';
            },
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

    

  }

  salvar() {
    let retorno: any;
    if (this.produto._id) {
      retorno = this.produtoSrv.atualizar(this.produto);
    } else {
      retorno = this.produtoSrv.novo(this.produto);
    }
    retorno.subscribe(
      () => {
        this.snackBar.open('produto salvo com sucesso', 'OK', { duration: 2000 });
        this.router.navigate(['produto']); // Volta à listagem
      },
      erro => {
        this.snackBar.open('Erro ao salvar o produto: ' + erro.message, 'OK');
        console.error(erro);
      }
    );
  }

  cancelar() {
    if (confirm('Deseja realmente cancelar as alterações?')) {
      this.router.navigate(['produto']);
    }
  }


}