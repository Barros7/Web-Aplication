import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyComponent } from './components/views/buy/buy.component';
import { HomeComponent } from './components/views/home/home.component';
import { SobreComponent } from './components/views/sobre/sobre.component';
import { LoginComponent } from './components/views/login/login.component';
import { VendaComponent } from './components/views/venda/venda.component';
import { RegisterComponent } from './components/views/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent}, //routerLink da página sobre, aparece quando clicado;
  { path: 'buy', component: BuyComponent },
  { path: 'venda', component: VendaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
