import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { PostInterface } from 'src/interfaces/post.interface';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
    posts: PostInterface[] = [];

    constructor(private srv: ServiceService) {}
    ngOnInit(): void {
        this.posts = this.srv.getPost().filter((post) => !post.active);
    }
}
