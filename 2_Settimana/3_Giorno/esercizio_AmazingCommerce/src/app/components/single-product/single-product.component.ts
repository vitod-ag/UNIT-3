import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
// oltre all'interfaccia e all'Input mi porto dietro anche i due service di cart e favourite
import { CartService } from 'src/app/services/cart.service';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  @Input() product!: Product

  constructor(private cartSrv: CartService, private favouriteSrv: FavouritesService) {}

  addToCart(prod: Product) {
    this.cartSrv.addToCart(prod);
  }

  addToFavs(product: Product) {
    this.favouriteSrv.addFavorite(product);    //mi collego con la funzione addFavorite del service favourite
  }

  isFav(id:number) {
    return this.favouriteSrv.isFav(id);
  }

}
