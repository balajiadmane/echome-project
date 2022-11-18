import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthGuardService } from './authGuard.service';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { LoginAuthGuardService } from './login-auth-guard.service';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    canActivate:[LoginAuthGuardService]
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"landingPage",
    component:LandingPageComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"**",
    redirectTo:'/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
