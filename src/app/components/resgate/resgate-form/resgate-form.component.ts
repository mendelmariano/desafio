import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {formatNumber} from '@angular/common';

import { Investment } from '../../investment/shared/investment.model';
import { InvestmentService } from '../../investment/shared/investment.service';
import { Acao } from '../../shared/acao.model';
import { AcaoCalculada } from '../../shared/acaoCalculada.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResgateService } from '../shared/resgate.service';

@Component({
  selector: 'app-resgate-form',
  templateUrl: './resgate-form.component.html',
  styleUrls: ['./resgate-form.component.css']
})
export class ResgateFormComponent implements OnInit {

  public investment: Investment;
  public acoes:Acao[] = [];
  public acoesCalculadas: AcaoCalculada[] = [];
  formularioResgate: FormGroup;
  inputResgate = {};
  msgErro;


  constructor(private router: Router, private investmentService: InvestmentService, private resgateService: ResgateService,
              private route:ActivatedRoute, private fb:FormBuilder,  private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadInvestment(this.route.snapshot.paramMap.get('nome'));
    this.buildResgateForm();

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

  buildResgateForm(){
    this.formularioResgate = this.fb.group({});
  }

  createFormResgate(){

    this.formularioResgate = this.fb.group(this.inputResgate);
  }

  get resgates(){
    return this.formularioResgate.get('resgates') as FormArray;
  }




  createResgate(campo){
    console.log('campooo: ', campo);
    const resgateFormGroup = this.fb.group(campo);
    this.resgates.push(resgateFormGroup);
  }

  onSubmit(formValue: any){}

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
          this.inputResgate[acao?.id] = ['', Validators.max( acaoCalculada.saldoAcumulado)];
        }
      )
      this.createFormResgate();
      console.log("inputss: ",this.inputResgate);
      console.log("acoes calculadas: ", this.acoesCalculadas)



    return
  }

  cancel(){
    return this.router.navigate(['/investments']);
  }

  submitForm(){
    console.log("Formulário: ", this.formularioResgate.value);
    const resgatesObj = this.formularioResgate.value;
    const resgatesMaiores=[];
    const camposVazios=[];
    const resgatesSucesso = [];


    var resgatesArray=[];
    Object.keys(resgatesObj).map(function(key) { // Converte o objeto do form em array para percorrê-lo
      resgatesArray[key]= resgatesObj[key]
      return
    });


    resgatesArray.forEach((e, i)=>{
      if(i!=null && e!=""){
        const acao = this.acoesCalculadas.filter(e=>e.id == i.toString());
        if(e>acao[0]?.saldoAcumulado){
          const msg = `O valor de resgate do (a) ${acao[0]?.nome} não pode ser maior que
          R$ ${acao[0]?.saldoAcumulado.toFixed(2)} .`;
          this.msgErro = msg;
          return this.resgateService.showMessage(msg);
        }
      }


    })

  }

}
