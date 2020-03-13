import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Posts } from '../posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'status'];
  data: Posts[] = [];
  isLoadingResults = true;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPosts()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
