import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {ClienteService} from '../../services/cliente.service'
import {StoreService} from '../../services/store.service'
import {ProdutoService} from '../../services/produto.service'
import {PedidoService} from '../../services/pedido.service'


@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {
  public pedidos: any; 
  
  public colunasVisiveis: string[] = [
    'numero',
    'cliente',
    'loja',
    'item',
    'data',
    'excluir'
  ];

  constructor(
    private clienteServ: ClienteService,
    private router: Router,
    private storeServ: StoreService,
    private produtoServ: ProdutoService,
    private snackBar: MatSnackBar,
    private pedidoServ: PedidoService

  ) { }

  ngOnInit() {
    // Chamando o service
    this.pedidoServ.listar().subscribe(
      
      dados => this.pedidos = dados, // Callback do bem
      
      erro => console.error(erro) // Callback do mal
   );
  }

  excluir(id:String) {
    let retorna: any;
    if (confirm('Deseja realmente excluir?')) {
      this.pedidoServ.excluir(id).subscribe(
        () => {
          this.snackBar.open('Excluído com sucesso', 'OK', { duration: 2000});
          this.ngOnInit();
        },
        erro => this.snackBar.open('ERRO AO EXCLUIR: ' + erro.message, 'OK')
      );
      
    }
  }

}
