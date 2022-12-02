import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingService } from '../landing-page/landing.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {


  productInfo:any;

  constructor(
    private route:ActivatedRoute,
    private productService:LandingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (p:any)=>{
       /// console.log(p)
        this.getProductInfo(p.id); // 1
      }
    )
  }


  private getProductInfo(product_id:string) { // 2
      this.productService.getSingleProductInfoById(product_id).subscribe(
        (response)=>{
            // success
            console.log(response);
            this.productInfo = response;
        },
        (error)=>{
            // error block
        },
        ()=>{
          // completed
        }
      )
  }
}
