import {Component, Input} from '@angular/core';
import {Post} from "../../data/post";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})
export class PostListItemComponent {
  @Input()
  public post!: Post

}
