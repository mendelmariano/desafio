import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ResgateService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string): void {

    this.snackBar.open(msg, 'x', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    } )
  }
}
