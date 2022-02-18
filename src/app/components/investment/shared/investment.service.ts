import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar"
import { Observable } from 'rxjs';
import { Investment } from './investment.model';



@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  baseUrl = "https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  read(): Observable <Investment[]>{
    return this.http.get<Investment[]>(this.baseUrl)
  }
}
