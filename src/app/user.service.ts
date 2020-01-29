import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  GetUser()
  {
   return this.http.get("http://localhost:52276/api/User/UserList");
  }
}
