import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: number = 0;
  post: Post = new Post(0, '', '', '');

  constructor(private route: ActivatedRoute, private _postService: PostService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id']; 
      this.post = this._postService.getPost(this.postId) || new Post(0, '', '', '');
    });
  }

}
