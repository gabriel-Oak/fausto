import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../../services/produto.service'
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {


  public produtos: any;
  
  public colunasVisiveis: string[] = [
    'nome',
    'descricao',
    'slug',
    'preco',
    'excluir'
  ];

  constructor(
    private produtoServ: ProdutoService,     
    private router: Router,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    // Chamando o service
    this.produtoServ.listar().subscribe(
      
      dados => this.produtos = dados, // Callback do bem
      
      erro => console.error(erro) // Callback do mal
   );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir?')) {
      this.produtoServ.excluir(id).subscribe(
        () => {
          this.snackBar.open('Excluído com sucesso', 'OK', { duration: 2000});
          this.ngOnInit();
        },
        erro => this.snackBar.open('ERRO AO EXCLUIR: ' + erro.message, 'OK')
      );
      
    }
  }

}