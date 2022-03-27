import { Component, OnInit } from '@angular/core';
import IPost from 'src/app/core/model/Post';
import { PostService } from 'src/app/core/service/post.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  constructor(public postService: PostService) {}

  public allPosts!: IPost[];

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.allPosts = data;
    });
  }
}
