import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { AppRoutingModule } from './app-routing.module';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { InvestmentCrudComponent } from './views/investment-crud/investment-crud.component';
import { InvestmentReadComponent } from './components/investment/investment-read/investment-read.component';
import { ResgateFormComponent } from './components/resgate/resgate-form/resgate-form.component';
import { InputMaskDirective } from './directives/input-mask.directive';
import { CurrencyPipe } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { LiveDialogComponent } from './views/assets/live-dialog/live-dialog.component';
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";


registerLocaleData(localePt);


export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    InvestmentCrudComponent,
    InvestmentReadComponent,
    ResgateFormComponent,
    InputMaskDirective,
    LiveDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxCurrencyModule,
  ],

  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
