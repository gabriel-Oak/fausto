import { Component, OnInit } from '@angular/core';
import {EnderecoService} from '../../services/endereco.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private enderecoSrv: EnderecoService,
    private snackBar: MatSnackBar
  ) { }

  public titulo: String = 'Novo endereço';

  public endereco: any = {conjunto: false};


  ngOnInit() {

    // Pedimos para que o ActivatedRoute busque para nós os parâmetros da url
    this.actRoute.params.subscribe(  // Chamada assíncrona
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // 1) Vamos buscar os dados do objeto no back-end
          this.enderecoSrv.obterUm(params.id).subscribe(
            obj => { // Callback se OK
              this.endereco = obj;
              console.log(obj);
              this.titulo = 'Editar endereco';
            },
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

    

  }

  salvar() {
    let retorno: any;
    if (this.endereco._id) {
      retorno = this.enderecoSrv.atualizar(this.endereco);
      console.log(this.endereco._id);
    } else {
      retorno = this.enderecoSrv.novo(this.endereco);
    }
    retorno.subscribe(
      () => {
        this.snackBar.open('endereco salvo com sucesso', 'OK', { duration: 2000 });
        this.router.navigate(['endereco']); // Volta à listagem
      },
      erro => {
        this.snackBar.open('Erro ao salvar o endereco: ' + erro.message, 'OK');
        console.error(erro);
      }
    );
  }

  excluir() {
    let retorna: any;
    if (confirm('Deseja realmente excluir?')) {
      this.enderecoSrv.excluir(this.endereco).subscribe(
        () => {
          this.snackBar.open('Excluído com sucesso', 'OK', { duration: 2000});
          this.router.navigate(['/']);
        },
        erro => this.snackBar.open('ERRO AO EXCLUIR: ' + erro.message, 'OK')
      );
      
    }
  }


}