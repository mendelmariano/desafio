import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputMask]'
})
export class InputMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }


  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '$1');
    // } else if (newVal.length <= 4) {
    //   newVal = newVal.replace(/^(\d{0,1})(\d{0,3})/, '$1,$2');
    } else {
      newVal = newVal.substring(0, 4);
      newVal = newVal.replace(/^(\d{0,1})(\d{1,3})/, '$1,$2');
    }
    this.ngControl.valueAccessor.writeValue("$"+ newVal);
    // console.log(this.toNumber(newVal))
  }

//   toNumber(val){
// let valArr=val.split('');
// let valFiltered = valArr.filter(x=> !isNaN(x))
// let valProcessed = valFiltered.join('')
// return valProcessed;
//   }
}
