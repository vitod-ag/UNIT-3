import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-advise',
    templateUrl: './advise.component.html',
    styleUrls: ['./advise.component.scss'],
})
export class AdviseComponent {
    posts: Post[] = [];
    advised: Post[] = [];
    included: number[] = [];

    constructor() {
        this.readPosts();
    }

    async readPosts() {
        const response = await fetch('../../assets/db.json');
        const data = await response.json();
        this.posts = data;
        this.buildIndex();
        this.advisePosts();
        
    }

    buildIndex() {
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * this.posts.length);
            while (this.included.includes(index)) {
                index = Math.floor(Math.random() * this.posts.length);
            }
            this.included.push(index);
        }
    }

    advisePosts() {
        for (let i = 0; i < this.included.length; i++) {
            let postIndex = this.included[i] - 1;
            this.advised.push(this.posts[postIndex]);
        }
    }
}
