import { Injectable } from '@angular/core';
import { Observable, of , throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Posts  } from "./posts";
import { PostsDetails  } from "./posts-details";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://jsonplaceholder.typicode.com'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

   }
private handleError<T>(operation = 'operation', result?: T){
  return (error: any): Observable<T> =>{
    console.error(error);
    return of (result as T);
  };
}

getPosts(): Observable<Posts[]> {
  return this.http.get<Posts[]>(`${apiUrl}/posts`)
    .pipe(
      tap(posts => console.log('fetched Posts')),
      catchError(this.handleError('getPosts', []))
    );
}
getPostsById(id: string): Observable<Posts> {
  const url = `${apiUrl}/posts/${id}/comments`;
  return this.http.get<Posts>(url).pipe(
    tap(_ => console.log(`fetched Posts id=${id}`)),
    catchError(this.handleError<Posts>(`getPostsById id=${id}`))
  );
}




}
