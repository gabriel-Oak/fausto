import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service'

import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  public lojas: any;
  
  public colunasVisiveis: string[] = [
    'numero',
    'endereco',
    'excluir'
  ];

  constructor(
    private storeServ: StoreService,
    private router: Router,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    // Chamando o service
    this.storeServ.listar().subscribe(
      
      dados => this.lojas = dados, // Callback do bem
      
      erro => console.error(erro) // Callback do mal
   );
  }

  excluir(id:String) {
    let retorna: any;
    if (confirm('Deseja realmente excluir?')) {
      this.storeServ.excluir(id).subscribe(
        () => {
          this.snackBar.open('Excluído com sucesso', 'OK', { duration: 2000});
          this.ngOnInit();
        },
        erro => this.snackBar.open('ERRO AO EXCLUIR: ' + erro.message, 'OK')
      );
      
    }
  }

}
