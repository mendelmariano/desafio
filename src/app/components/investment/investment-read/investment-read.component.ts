import { Component, OnInit } from '@angular/core';
import { Investment } from '../shared/investment.model';
import { InvestmentService } from '../shared/investment.service';

@Component({
  selector: 'app-investment-read',
  templateUrl: './investment-read.component.html',
  styleUrls: ['./investment-read.component.css']
})
export class InvestmentReadComponent implements OnInit {

  displayedColumns = ['nome', 'objetivo', 'saldoTotal'];
  investimentos: Investment[];

  constructor(private investmentService:InvestmentService) { }

  ngOnInit(): void {
    this.buscaDados();
  }

  buscaDados(){
    this.investmentService.read().subscribe(
      (investimento)=>{
        console.log("teste",investimento);
      }
    )

  }

}
