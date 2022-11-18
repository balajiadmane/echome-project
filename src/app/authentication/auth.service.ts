import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  // observable
  login(userName:string,password:string) : Observable<any> {
    return this.http.post("https://fakestoreapi.com/auth/login",
    {
      username:userName,
      password:password
    })
  }

  register() {

  }

  setToken(token:string) : void  {
      window.localStorage.setItem("tk",token);
  }

  getToken() :string {
    return window.localStorage.getItem("tk");
  }
}
