import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

//todo: write test for ImgBrokenDirective
describe('ImgBrokenDirective', () => {

  //TODO: componente de prueba
  @Component({
    template: '<img class="testing-directive" appImgBroken [src]="srcMock" >'
  })

  class TestComponent {
    public srcMock:any = null
  }

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective        
      ]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  //todo: must instantiate the directive
  it('should create an instance', () => {
    //TODO: create una instancia correctamente
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('👍👍👍👍👍 TESTCOMPONENT Deberia instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('🆗🆗🆗🆗Deberia cambiar la Imagen por un base64', (done:DoneFn) => {
    //TODO: arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement   
    const beforeImgSrc = beforeImgElement.src; //TODO: obtener src de la imagen antes de ser cambiada    
    component.srcMock = undefined;

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
      console.log('💥💥💥 AFTER ImgElement', afterImgElement);
      const afterImgSrc = afterImgElement.src; //TODO: obtener src de la imagen antes de ser cambiada
      console.log('🚱🚱🚱 AFTER ImgSrc', afterImgSrc);


      expect(afterImgSrc).toMatch(/\bdata:image\b/); //TODO: data:image exista como alternativa
      done();
      
    }, 3000);
  });
});
