import { Component } from '@angular/core';
import { Post } from 'src/app/post.interface';

@Component({
  selector: 'app-consigliati',
  templateUrl: './consigliati.component.html',
  styleUrls: ['./consigliati.component.scss']
})
export class ConsigliatiComponent {
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
