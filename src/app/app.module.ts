import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { NavbarComponent } from './landing/landing-page/navbar/navbar.component';
import { ProductComponent } from './landing/landing-page/product/product.component';
import { ProductInfoComponent } from './landing/product-info/product-info.component';

@NgModule({
  declarations: [  
    AppComponent, 
    LoginComponent, 
    RegisterComponent,
     LandingPageComponent,
      NavbarComponent, 
      ProductComponent, 
      ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
