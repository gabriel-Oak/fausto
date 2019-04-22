import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

/**** Datas em português no MatDatepicker  ****/

// É preciso instalar os seguintes pacotes:
// yarn add @angular/material-moment-adapter moment

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
// import { MatNativeDateModule } from '@angular/material/core';
/**********************************************/

import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { EnderecoFormComponent } from './endereco/endereco-form/endereco-form.component';
import { StoreFormComponent } from './store/store-form/store-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    ProdutoFormComponent,
    StoreListComponent,
    EnderecoFormComponent,
    StoreFormComponent,
    ClienteListComponent,
    ClienteFormComponent,
    PedidoListComponent,
    PedidoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    /**** Datas em português no MatDatepicker  ****/
    // MatNativeDateModule
    MatMomentDateModule
    /**********************************************/
  ],
  providers: [
    /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
    /**********************************************/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
