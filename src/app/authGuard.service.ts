import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./authentication/auth.service";



@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private authService:AuthService,
        private router:Router
    ) {

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.isAuthorizedUser()) 
            return true;
        else {
            this.router.navigateByUrl("/login")
            return false;
        }
    }
}