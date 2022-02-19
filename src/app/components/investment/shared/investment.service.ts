import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar"
import { Observable } from 'rxjs';
import { Investment } from './investment.model';
import { catchError, filter, map } from 'rxjs/operators';
import { pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  baseUrl = "https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  read(): Observable <Investment[]>{
    return this.http.get<Investment[]>(this.baseUrl, {responseType: 'json'}).pipe(
      catchError(this.formatError),
      map(this.investmentsToJson)
    );
  }

  readByName(nome: string):Observable<Investment[]>{
    return this.http.get<Investment[]>(this.baseUrl, {responseType: 'json'}).pipe(
      catchError(this.formatError),
      map(e=>this.investmentToJson(e, nome))
    );
  }

  investmentToJson(response:any, nome:string):Investment[]{
    //console.log('response do service',response);
    //console.log("lista: ",response.response.data.listaInvestimentos);

    return response.response.data.listaInvestimentos.filter(e=>e.nome==nome);

  }


  investmentsToJson(response:any):Investment[]{
    //console.log('response do service',response);
    console.log("lista: ",response.response.data.listaInvestimentos);

    return response.response.data.listaInvestimentos;

  }

  formatError(err:any): Observable<any>{
    return err;
  }
}
