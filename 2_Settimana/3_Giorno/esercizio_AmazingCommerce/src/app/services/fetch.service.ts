import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private apiURL: string = "https://dummyjson.com/products"; 

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Products>(this.apiURL);    // richiesta HTTP con il metodo get dove si ricevono dati di tipo Products
  }
}
