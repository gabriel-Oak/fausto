import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ClienteService} from '../../services/cliente.service'
import {StoreService} from '../../services/store.service'
import {ProdutoService} from '../../services/produto.service'
import {PedidoService} from '../../services/pedido.service'
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private clienteSrv: ClienteService,
    private router: Router,
    private storeSrv: StoreService,
    private produtoSrv: ProdutoService,
    private snackBar: MatSnackBar,
    private pedidoSrv: PedidoService
  ) { }
  public titulo: String = 'Novo Cliente';

  public pedido: any = {conjunto: false};
  public clientes: any = [];
  public produtos: any = [];
  public lojas: any = [];


  ngOnInit() {

    // Pedimos para que o ActivatedRoute busque para nós os parâmetros da url
    this.actRoute.params.subscribe(  // Chamada assíncrona
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // 1) Vamos buscar os dados do objeto no back-end
          this.pedidoSrv.obterUm(params.id).subscribe(
            obj => { // Callback se OK
              this.pedido = obj;
              console.log(obj);
              this.titulo = 'Editar pedido';
            },
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

    this.clienteSrv.listar().subscribe(
    dados => {
      this.clientes = dados;
      console.log(dados);
    },
    erro => console.error(erro)
  );

  this.storeSrv.listar().subscribe(
    dados => {
      this.lojas = dados;
      console.log(dados);
    },
    erro => console.error(erro)
  );

  this.produtoSrv.listar().subscribe(
    dados => {
      this.produtos = dados;
      console.log(dados);
    },
    erro => console.error(erro)
  );
  }

  

  salvar() {
    let retorno: any;
    if (this.pedido._id) {
      retorno = this.pedidoSrv.atualizar(this.pedido);
    } else {
      retorno = this.pedidoSrv.novo(this.pedido);
    }
    retorno.subscribe(
      () => {
        this.snackBar.open('pedido salva com sucesso', 'OK', { duration: 2000 });
        this.router.navigate(['pedido']); // Volta à listagem
      },
      erro => {
        this.snackBar.open('Erro ao salvar a pedido: ' + erro.message, 'OK');
        console.error(erro);
      }
    );
  }

  cancelar() {
    if (confirm('Deseja realmente cancelar as alterações?')) {
      this.router.navigate(['pedido']);
    }
  }

  


}

