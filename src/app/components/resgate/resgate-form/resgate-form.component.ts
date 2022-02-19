import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


import { Investment } from '../../investment/shared/investment.model';
import { InvestmentService } from '../../investment/shared/investment.service';
import { Acao } from '../../shared/acao.model';
import { AcaoCalculada } from '../../shared/acaoCalculada.model';

@Component({
  selector: 'app-resgate-form',
  templateUrl: './resgate-form.component.html',
  styleUrls: ['./resgate-form.component.css']
})
export class ResgateFormComponent implements OnInit {

  public investment: Investment;
  public formularioResgate: FormGroup;
  public acoes:Acao[] = [];
  public acoesCalculadas: AcaoCalculada[] = [];

  constructor(private router: Router, private investmentService: InvestmentService,
              private route:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loadInvestment(this.route.snapshot.paramMap.get('nome'));
    this.createFormResgate(this.acoes);

  }


  public loadInvestment(nome:string){

    return this.investmentService.readByName(nome).subscribe(
      investimentos=>{
        investimentos.forEach(
          investimento=> {
            this.investment = investimento;
            this.acoes.push(...investimento.acoes);
            this.calculaAcao(this.acoes, this.investment);
          }
        )
        console.log("teste ",this.investment);
      }
      );
  }

  public createFormResgate(acoes:Acao[]){
    let campos = {};


    acoes.forEach(acao => {
      console.log("Ação tal: ", acao);
      campos = { campo: acao.id}

    });
    //this.formularioResgate = this.fb.group(campos);
  }

  public calculaAcao(acoes: Acao[], investimento: Investment){
    console.log("Ação k: ", acoes);
    console.log("Investimento k: ", investimento);


      acoes.forEach(
        acao=>{
          const acaoCalculada: AcaoCalculada = {};
          acaoCalculada.id = acao?.id;
          acaoCalculada.nome = acao?.nome;
          acaoCalculada.saldoAcumulado = ((acao?.percentual*this.investment.saldoTotal)/100);
          console.log("Ação tal: ", acaoCalculada );
          this.acoesCalculadas.push(acaoCalculada);
        }
      )

      console.log("acoes calculadas: ", this.acoesCalculadas)



    return
  }

}
