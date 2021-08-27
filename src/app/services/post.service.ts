import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private _posts: Post[]=[];
  constructor(private http: HttpClient) {
    this.getPost();
   }

   get posts(){
     return this._posts;
   }
   getPost(){
     this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')

     .subscribe(data => this._posts = data)
     console.log(this._posts)
   }
}
