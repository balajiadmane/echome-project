import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName:string = "";
  password:string = "";

  constructor(
    private loginService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(
      this.userName,
      this.password
    ).subscribe(
      (data)=>{
        this.loginService.setToken(data.token);
        this.router.navigateByUrl("/landingPage")
      }, 
      (error)=>{}, 
      ()=>{} // completed
    )
  }

}