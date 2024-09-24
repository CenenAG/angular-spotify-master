import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string = ''

  @HostListener('error') handleError() : void {
    const elNative = this.elHost.nativeElement
    console.log('Error loading image: ',this.elHost.nativeElement.src)
    elNative.src = '../../../assets/images/SpotifyS.png'

  }

  constructor(private elHost: ElementRef) {

   }

}
