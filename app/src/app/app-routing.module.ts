import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyComponent } from './components/views/buy/buy.component';
import { HomeComponent } from './components/views/home/home.component';
import { SobreComponent } from './components/views/sobre/sobre.component';
import { LoginComponent } from './components/views/login/login.component';
import { VendaComponent } from './components/views/venda/venda.component';
import { FilterComponent } from './components/views/filter/filter.component';
import { RegisterComponent } from './components/views/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'buy', component: BuyComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'venda', component: VendaComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
