import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(public http: HttpClient) { }

  GetPlayer()
  {
      return this.http.get("http://localhost:52276/api/Player/PlayerList");
  }

  GetDataByID(No)
  {
      return this.http.get("http://localhost:52276/api/Player/"+No);
  }

  Update(playerdata)
  {
    console.log("prit here , hello");
    console.log(playerdata);
    return this.http.put("http://localhost:52276/api/Player",playerdata);
  }

  AddPlayer(player)
  {
      return this.http.post("http://localhost:52276/api/Player/AddPlayer",player);
  }


  Delete(No)
  {
      return this.http.delete("http://localhost:52276/api/Player/"+No);
  }

}
