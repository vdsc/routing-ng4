import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  constructor() { }
@HostBinding('disabled') variable="disabled";

@HostListener('mouseover') mouseover(){

  //this.border = "solid 2px green";
}

@HostListener('mouseout') mouseout(){

 // this.border = "solid 2px red";
}

}
