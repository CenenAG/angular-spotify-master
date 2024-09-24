import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(private _authService: AuthService, 
    private cookie: CookieService,
    private router: Router ) {
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]),
      });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this._authService.sendCredentials(email, password)
      .subscribe(responseOk => {
        console.log('sesion iniciada correcta', responseOk);
        const { tokenSession, data} = responseOk;
        this.cookie.set('zencontok', tokenSession, 4, '/');
        this.router.navigate(['/', 'tracks']);
      },
    err => {
      this.errorSession = true;
          console.log('ocurrio error con susu credenmciales', err);
        }
      );
  }
}