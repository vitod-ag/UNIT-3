import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EvidenceComponent } from './components/evidence/evidence.component';
import { RelatedComponent } from './components/related/related.component';
import { AdviseComponent } from './components/advise/advise.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EvidenceComponent,
    RelatedComponent,
    AdviseComponent,
    NavbarComponent,
    PostDetailComponent,
    InactivePostsComponent,
    ActivePostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
