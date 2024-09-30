import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { InjectSessionInterceptor } from './app/core/interceptors/inject-session.interceptor';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(BrowserModule), CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
  .catch(err => console.error(err));
