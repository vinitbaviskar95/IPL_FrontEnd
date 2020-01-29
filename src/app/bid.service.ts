import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(public http: HttpClient) { }

  GetDataByID(No)  
 {
      return this.http.get("http://localhost:52276/api/Player/"+No);
  }
  
  Add(data)
  {
    return this.http.post("http://localhost:52276/api/Bid",data);
  }

  GetBidHistory()
  {
      return this.http.get("http://localhost:52276/api/Bid");
  }

}
