import { Directive, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }
  @HostListener('click') onClick(){
      this.el.nativeElement.nextElementSibling.classList.toggle("active");
  }
}
