import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: environment.oktaConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
