import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LiveDialogComponent } from 'src/app/views/assets/live-dialog/live-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ResgateService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient, public dialog: MatDialog) { }


  showMessage(msg: string): void {

    this.snackBar.open(msg, 'x', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'snackbar-style'
    })
  }


  openDialog(msgs): void {
    const dialogRef = this.dialog.open(LiveDialogComponent, {
      data: { msgs }
    });

    dialogRef.afterClosed().subscribe(result => {
      return
    });
  }

  verificaFormVazio(resgateForm: any[]) {
    let cont = 0;
    resgateForm.forEach(e => {
      if (e != "") { cont++ }
    })

    return cont
  }

}
