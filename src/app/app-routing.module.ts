/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResgateFormComponent } from './components/resgate/resgate-form/resgate-form.component';
import { HomeComponent } from './views/home/home.component';
import { InvestmentCrudComponent } from './views/investment-crud/investment-crud.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "investments", component: InvestmentCrudComponent},
  {path: "resgate/update/:nome", component: ResgateFormComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
