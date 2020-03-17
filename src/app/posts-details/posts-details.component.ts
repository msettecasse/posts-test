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
  constructor(private route: ActivatedRoute,
     private api: ApiService,
      private router: Router
      ) { 
      }
      
  ngOnInit(): void {
        this.getPostsDetails(this.route.snapshot.params.id);
      }
  getPostsDetails(id: string) {
    let parent = this;
    this.isLoadingResults = true;
    this.api.getPostsById(id)
      .subscribe((data: any) => {
        this.postsDetails = data;
        console.log(this.postsDetails);
        this.isLoadingResults = false;
  }, err => {
    console.log(err);
    this.isLoadingResults = false;

});


}


}