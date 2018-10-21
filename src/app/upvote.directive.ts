import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpvote]'
})
export class UpvoteDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('click') onClicks () {
    this.textDeco('underline overline');
  }

  @HostListener('click') onDoubleClicks () {
    this.textDeco('None');
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = 'underline overline';
  }

}
