import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PostsDetails } from '../posts-details';
@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {
  postsDetails: PostsDetails = { 
    postId:'',
    id:'',
    name:'',
    email:'',
    body: ''
  };
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  getPostsDetails(id: string) {
    this.api.getPostsById(id)
      .subscribe((data: any) => {
        this.postsDetails = data;
        console.log(this.postsDetails);
        this.isLoadingResults = false;
      });
  }
  ngOnInit(): void {
    this.getPostsDetails(this.route.snapshot.params.id);
  }

}
