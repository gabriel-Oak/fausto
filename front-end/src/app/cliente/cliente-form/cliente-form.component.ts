import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {EnderecoService} from '../../services/endereco.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private clienteSrv: ClienteService,
    private snackBar: MatSnackBar,
    private enderecoSrv: EnderecoService

  ) { }

  public titulo: String = 'Novo Cliente';

  public cliente: any = {conjunto: false};
  public enderecos: any = [];


  ngOnInit() {

    // Pedimos para que o ActivatedRoute busque para nós os parâmetros da url
    this.actRoute.params.subscribe(  // Chamada assíncrona
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // 1) Vamos buscar os dados do objeto no back-end
          this.clienteSrv.obterUm(params.id).subscribe(
            obj => { // Callback se OK
              this.cliente = obj;
              console.log(obj);
              this.titulo = 'Editar cliente';
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
    if (this.cliente._id) {
      retorno = this.clienteSrv.atualizar(this.cliente);
    } else {
      retorno = this.clienteSrv.novo(this.cliente);
    }
    retorno.subscribe(
      () => {
        this.snackBar.open('cliente salva com sucesso', 'OK', { duration: 2000 });
        this.router.navigate(['cliente']); // Volta à listagem
      },
      erro => {
        this.snackBar.open('Erro ao salvar a cliente: ' + erro.message, 'OK');
        console.error(erro);
      }
    );
  }

  cancelar() {
    if (confirm('Deseja realmente cancelar as alterações?')) {
      this.router.navigate(['cliente']);
    }
  }

  


}

