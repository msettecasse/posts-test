import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostsDetailsComponent} from './posts-details/posts-details.component';
const routes: Routes = [
  {
    path:'',
    component:PostsComponent,
    data:{ title: 'Posts'}
  },
  {
    path: 'posts-details/:id',
    component:PostsDetailsComponent,
    data:{ title: 'Posts Details'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
