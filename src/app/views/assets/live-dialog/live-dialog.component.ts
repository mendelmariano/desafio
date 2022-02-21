import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-live-dialog',
  templateUrl: './live-dialog.component.html',
  styleUrls: ['./live-dialog.component.css']
})
export class LiveDialogComponent implements OnInit {


  tipoMsg:number;
  constructor(public dialogRef: MatDialogRef<LiveDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {msgs: []},
               public router:Router) {}


  ngOnInit(): void {
    this.verificaTipoMsg(this.data.msgs);
    console.log("Mensagens: ", this.data.msgs);
  }

  closeModal(): void {

    this.dialogRef.close();

  }

  success(){
    this.dialogRef.close();
    return this.router.navigate(['/investments']);
  }

  verificaTipoMsg(msgs:[]){

    this.tipoMsg = msgs.length;
  };

}
