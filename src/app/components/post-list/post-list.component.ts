import { Component, OnInit} from '@angular/core';
import {Post} from "../../data/post";
import {PostService} from "../../services/post_service";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{
  posts: Post[] = []

  constructor(private postService: PostService) {
  }

  ngOnInit():void{
    this.loadPosts();
  }

  loadPosts():void{
    this.postService.getAllPosts().subscribe(posts=>
    this.posts=posts.reverse())
  }
}
