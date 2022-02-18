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
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { InvestmentCrudComponent } from './views/investment-crud/investment-crud.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"products", component: ProductCrudComponent},
  {path: "products/create", component: ProductCreateComponent},
  {path: "products/update/:id", component: ProductUpdateComponent},
  {path: "products/delete/:id", component: ProductDeleteComponent},
  {path: "investments", component: InvestmentCrudComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
