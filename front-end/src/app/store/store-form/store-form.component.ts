import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {EnderecoService} from '../../services/endereco.service';


@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
}) 
export class StoreFormComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private lojaSrv: StoreService,
    private snackBar: MatSnackBar,
    private enderecoSrv: EnderecoService

  ) { }

  public titulo: String = 'Nova Loja';

  public loja: any = {conjunto: false};
  public enderecos: any = [];


  ngOnInit() {

    // Pedimos para que o ActivatedRoute busque para nós os parâmetros da url
    this.actRoute.params.subscribe(  // Chamada assíncrona
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // 1) Vamos buscar os dados do objeto no back-end
          this.lojaSrv.obterUm(params.id).subscribe(
            obj => { // Callback se OK
              this.loja = obj;
              console.log(obj);
              this.titulo = 'Editar loja';
            },
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

    this.enderecoSrv.listar().subscribe(
    dados => {
      this.enderecos = dados;
      console.log(dados);
    },
    erro => console.error(erro)
  );

  }

  

  salvar() {
    let retorno: any;
    if (this.loja._id) {
      retorno = this.lojaSrv.atualizar(this.loja);
    } else {
      retorno = this.lojaSrv.novo(this.loja);
    }
    retorno.subscribe(
      () => {
        this.snackBar.open('loja salva com sucesso', 'OK', { duration: 2000 });
        this.router.navigate(['loja']); // Volta à listagem
      },
      erro => {
        this.snackBar.open('Erro ao salvar a loja: ' + erro.message, 'OK');
        console.error(erro);
      }
    );
  }

  cancelar() {
    if (confirm('Deseja realmente cancelar as alterações?')) {
      this.router.navigate(['loja']);
    }
  }

  


}