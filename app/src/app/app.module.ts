
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';     // Ícones;
import {MatButtonModule} from '@angular/material/button';  // Botão
import {MatTableModule} from '@angular/material/table'; // Tabela;
import {MatFormFieldModule} from '@angular/material/form-field'; // Formulários;

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuyComponent } from './components/views/buy/buy.component';
import { HomeComponent } from './components/views/home/home.component';
import { VendaComponent } from './components/views/venda/venda.component';
import { LoginComponent } from './components/views/login/login.component';
import { FilterComponent } from './components/views/filter/filter.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RegisterComponent } from './components/views/register/register.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { CarrinhoComponent } from './components/views/carrinho/carrinho.component';
import { SobreComponent } from './components/views/sobre/sobre.component';
import { EntrecontactoComponent } from './components/views/entrecontacto/entrecontacto.component';


@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    HomeComponent,
    VendaComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    RegisterComponent,
    AsideComponent,
    NavComponent,
    CarrinhoComponent,
    SobreComponent,
    EntrecontactoComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,    // Ícones;
    MatButtonModule,   // Botão;
    MatTableModule, // Tabela;
    MatFormFieldModule // Formulários;
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
