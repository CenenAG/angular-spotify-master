import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgBroken]',
    standalone: true
})
export class ImgBrokenDirective {

  @Input() customImg: string | boolean = false

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('Error loading image: ', this.elHost.nativeElement.src)
    elNative.src = this.customImg;
    if (this.customImg) {
      elNative.src = this.customImg;
    }else{
      elNative.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAD5JREFUGFdtjKENAEAIA4vC49h/HWbAERwexYfXVDW9S8nMRkTAzOhuVBXI3WeLqiIzsQJFxAD4w4LNbV6fD32XLKyP2o8zAAAAAElFTkSuQmCC';
    }

  }

  constructor(private elHost: ElementRef) {

  }

}
