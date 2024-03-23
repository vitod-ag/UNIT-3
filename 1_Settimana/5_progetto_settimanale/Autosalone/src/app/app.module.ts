import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { EvidenceComponent } from './components/evidence/evidence.component';
import { LoghiComponent } from './components/loghi/loghi.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ford',
    component: FordComponent
  },
  {
    path: 'audi',
    component: AudiComponent
  },
  {
    path: 'fiat',
    component: FiatComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    component: Error404Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Error404Component,
    FordComponent,
    AudiComponent,
    FiatComponent,
    EvidenceComponent,
    LoghiComponent,
    JumbotronComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
