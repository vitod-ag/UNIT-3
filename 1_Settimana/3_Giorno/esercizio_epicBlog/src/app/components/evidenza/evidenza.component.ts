import { Component } from '@angular/core';
import { Post } from 'src/app/post.interface';

@Component({
  selector: 'app-evidenza',
  templateUrl: './evidenza.component.html',
  styleUrls: ['./evidenza.component.scss'],
})
export class EvidenzaComponent {
  posts!: Post[];
  link = 'Leggi di più';

  constructor() {
    this.getPost().then((posts) => {
      this.posts = posts;
    });
  }
  async getPost() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data;
  }
}
