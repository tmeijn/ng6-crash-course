import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '@models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Post[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(data => this.posts$ = data);
  }

}
