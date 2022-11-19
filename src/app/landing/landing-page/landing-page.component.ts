import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

 
  productsList:Array<any> = [];

  constructor(
    private landingService:LandingService
  ) { }

  ngOnInit(): void {
    this.landingService.getAllProducts().subscribe(
      (response)=>{
        this.productsList = response;
        console.log("productsList",this.productsList);
      }
    )
  }

}
