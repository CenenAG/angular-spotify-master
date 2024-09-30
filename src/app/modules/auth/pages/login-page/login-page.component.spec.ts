import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        LoginPageComponent
    ]
});
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Aegurar se pueda crear el componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

   //TODO: Aegurar sea formulario invalido cuando ingrese datos incorrectos
   //TODO: Patron AAA (Arrange, Act, Assert)
   it('💥 should return invalid form', () => {
    
    //TODO: Arrange
    const mockCredenciales ={
      email: '0x0x0x0x0x0',
      password: '11111111111111111111111111'
    }

    const emailForm:any = component.formLogin.get('email');
    const passwordForm:any = component.formLogin.get('password');

    //TODO: Act
    emailForm?.setValue(mockCredenciales.email);
    passwordForm?.setValue(mockCredenciales.password);

    //TODO: Assert
    expect(component.formLogin.invalid).toEqual(true);
  });


  it('🆗 should return Valid form', () => {
    
    //TODO: Arrange
    const mockCredenciales ={
      email: 'test@test.com',
      password: '123456789'
    }

    const emailForm:any = component.formLogin.get('email');
    const passwordForm:any = component.formLogin.get('password');

    //TODO: Act
    emailForm?.setValue(mockCredenciales.email);
    passwordForm?.setValue(mockCredenciales.password);

    //TODO: Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('button must have the text "Iniciar Sesión"', () => {
    //TODO: Arrange
    const ElementRef = fixture.debugElement.query(By.css('.form-action button'))
    //TODO: Act
    const getInnerTest = ElementRef.nativeElement.innerText;
    //TODO: Assert
    expect(getInnerTest).toEqual('Iniciar Sesión');
  });


});
