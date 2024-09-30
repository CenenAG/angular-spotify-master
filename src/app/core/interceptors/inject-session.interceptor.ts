import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {

      let newRequest = request;
      const token = this.cookieService.get('zencontok');
      if (token) {
        newRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });

        /* console.log('aGREGO EL TOKEN 👌👌👌👌'); */
      }

      return next.handle(newRequest);

    } catch (e) {
      console.log('error en el interceptor=Error=> 🚗🚗🚗🚗', e);
      console.log('error en el interceptor=Request=> 💥💥💥', request);
      return next.handle(request);
    }
  }
}
