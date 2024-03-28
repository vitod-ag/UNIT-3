import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  [x: string]: any;

  myFavourites: Product[] = []
  favourites = new BehaviorSubject<Product[]>([]);   // creo un nuovo oggetto di tipo BehaviorSubject
  
  constructor() {}

  addFavorite(product: Product) {
    const exist = this.myFavourites.find(present => present.id === product.id);  // controllo se l'articolo è già presente nel carrello
    if(!exist) {
      this.myFavourites.push(product);
      this.favouriteList();
    }
  }

  removeFavourite(id:number) {
    const index = this.myFavourites.findIndex(product => product.id === id)
    this.myFavourites.splice(index, 1);
    this.favouriteList();
  }

  isFav(id:number) {
    return this.myFavourites.find(favourite => favourite.id === id);
  }

  favouriteList() {
    this.favourites.next(this.myFavourites);
  }
}
