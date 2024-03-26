import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirectiveCustom]'
})
export class DirectiveCustomDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = this.generateColorRandom();
  }

  generateColorRandom(): string {
    const lettersRGB = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += lettersRGB[Math.floor(Math.random() * 16)];
    
    }
    return color;
  }
}
