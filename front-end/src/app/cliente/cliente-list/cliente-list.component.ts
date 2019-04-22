import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {ClienteService} from '../../services/cliente.service'


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  public clientes: any; 
  
  public colunasVisiveis: string[] = [
    'nome',
    'email',
    'endereco',
    'excluir'
  ];

  constructor(
    private clienteServ: ClienteService,
    private router: Router,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    // Chamando o service
    this.clienteServ.listar().subscribe(
      
      dados => this.clientes = dados, // Callback do bem
      
      erro => console.error(erro) // Callback do mal
   );
  }

  excluir(id:String) {
    let retorna: any;
    if (confirm('Deseja realmente excluir?')) {
      this.clienteServ.excluir(id).subscribe(
        () => {
          this.snackBar.open('Excluído com sucesso', 'OK', { duration: 2000});
          this.ngOnInit();
        },
        erro => this.snackBar.open('ERRO AO EXCLUIR: ' + erro.message, 'OK')
      );
      
    }
  }

}
