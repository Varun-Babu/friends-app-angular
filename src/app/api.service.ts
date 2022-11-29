import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewFriends =() =>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
}
