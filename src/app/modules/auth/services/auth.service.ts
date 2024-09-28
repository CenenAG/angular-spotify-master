import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL =  environment.api;
  constructor(private http: HttpClient) { }

  sendCredentials(email:string, password:string): Observable<any>{
    const body =  {email, password}
    return this.http.post(`${this.URL}/auth/login`, body)
    /* .pipe(
      tap( (responseOk:any) => {
        console.log('sesion iniciada correcta', responseOk);
        const { tokenSession, data} = responseOk;
        this.cookie.set('zencontokserv', tokenSession, 4, '/'); 
      }
      )
    ) */
    
  }
}
