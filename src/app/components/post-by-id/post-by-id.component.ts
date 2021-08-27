import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-by-id',
  templateUrl: './post-by-id.component.html',
  styleUrls: ['./post-by-id.component.scss']
})
export class PostByIdComponent implements OnInit {
@Input() userId!: number;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }
get posts() {
  return this.postService.posts.filter((post) => post.id === this.userId)
}
}
