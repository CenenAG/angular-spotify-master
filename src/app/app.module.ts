import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes
    AppComponent
  ],
  imports: [ //TODO: Solo se importan otros modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
   /*  {
      provide: HTTP_INTERCEPTORS,
      multi: true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
