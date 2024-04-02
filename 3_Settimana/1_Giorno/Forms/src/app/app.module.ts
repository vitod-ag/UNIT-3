import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'templateD',
    component: TemplateDrivenComponent
  },
  {
    path:'reactiveForms',
    component: ReactiveFormsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    HomeComponent,
    ReactiveFormsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
