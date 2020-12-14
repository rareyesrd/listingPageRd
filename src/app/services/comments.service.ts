import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getComments(){
    let url = 'https://jsonplaceholder.typicode.com/comments';
    return  this.http.get(url);
  }
}
