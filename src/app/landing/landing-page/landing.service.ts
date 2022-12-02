import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() : Observable<[]> {
    return this.http.get<[]>("https://fakestoreapi.com/products");
  }
  
  getSingleProductInfoById(id:any) : Observable<any> {
    return this.http.get("https://fakestoreapi.com/products/"+id);
  }
}
