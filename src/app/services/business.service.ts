import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  constructor(private http: HttpClient){}
  getData(){
    let url = 'https://5fcfc9341f23740016630db3.mockapi.io/api/v1/business';
    return  this.http.get(url);
  }
}
