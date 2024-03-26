import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { PostInterface } from 'src/interfaces/post.interface';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
    posts:  PostInterface[] = [];

    constructor(private srv: ServiceService) {}
    ngOnInit(): void {
        this.posts=this.srv.getPost().filter((post) => post.active);
    }
}
