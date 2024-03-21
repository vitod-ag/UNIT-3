import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EvidenceComponent } from './components/evidence/evidence.component';
import { RelatedComponent } from './components/related/related.component';
import { AdviseComponent } from './components/advise/advise.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Route[] = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'activePosts',
    component: ActivePostsComponent
  },
  {
    path: 'inactivePosts',
    component: InactivePostsComponent
  },
  {
    path: 'postDetail',
    component: PostDetailComponent
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
    EvidenceComponent,
    RelatedComponent,
    AdviseComponent,
    NavbarComponent,
    PostDetailComponent,
    InactivePostsComponent,
    ActivePostsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
