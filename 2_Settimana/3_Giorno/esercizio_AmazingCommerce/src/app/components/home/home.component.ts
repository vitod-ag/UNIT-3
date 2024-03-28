import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';    // mi importo l'interfaccia
import { FetchService } from 'src/app/services/fetch.service';   // mi importo il service dove prendo tutti i prodotti
import { Subscription } from 'rxjs';                             // mi importo il subscription che mi serve quando prendo dalla fetch

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {
  products!: Product[];
  sub!: Subscription;
  constructor(private srvFetch: FetchService) {}
  ngOnInit(): void {
      this.sub = this.srvFetch.getProducts().subscribe(       //La chiamata a getProducts() restituisce un'istanza di Observable, che rappresenta una sequenza di valori che arriveranno nel tempo
          (res) => {
              this.products = res.products;            // Chiamare .subscribe(...) su questo Observable significa "sottoscriversi" ad esso per ricevere i valori emessi. La funzione subscribe() prende due argomenti: una funzione per gestire i valori emessi (il callback res), e una funzione per gestire gli errori (il callback error).
          },
          (error) => console.log(error)
      );
  }
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
  
