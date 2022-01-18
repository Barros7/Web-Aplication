import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyComponent } from './components/views/buy/buy.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { VendaComponent } from './components/views/venda/venda.component';
import { RegisterComponent } from './components/views/register/register.component';
import { EntrecontactoComponent } from './components/views/entrecontacto/entrecontacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'venda', component: VendaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'entrecontacto', component: EntrecontactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
