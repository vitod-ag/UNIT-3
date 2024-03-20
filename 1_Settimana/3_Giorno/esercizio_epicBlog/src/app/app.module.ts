import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { ConsigliatiComponent } from './components/consigliati/consigliati.component';
import { EvidenzaComponent } from './components/evidenza/evidenza.component';
import { CorrelatiComponent } from './components/correlati/correlati.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostDetailComponent,
    InactivePostsComponent,
    ActivePostsComponent,
    ConsigliatiComponent,
    EvidenzaComponent,
    CorrelatiComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
