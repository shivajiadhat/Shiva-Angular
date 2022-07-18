import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLight]'
})
export class LightDirective {

  constructor(private elem : ElementRef) { }
  
  @Input() appLight = " ";
  @HostListener('mouseenter') onMouseEnter() {
    this.highLight (this.appLight || 'red' );
   }
  
   @HostListener('mouseleave') onMouseLeave(){
    this.highLight(' ');
   }

  highLight(color:string){
    this.elem.nativeElement.style.backgroundColor = color;
    }
}
