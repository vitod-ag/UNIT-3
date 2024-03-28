import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    EllipsisPipe,
    NavBarComponent,
    HomeComponent,
    CartComponent,
    FavouritesComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
