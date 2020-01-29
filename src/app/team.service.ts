import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(public http: HttpClient) { }

  GetTeam()
  {
   return this.http.get("http://localhost:52276/api/Team/TeamList");
  }
  AddTeam(team)
  {
    return this.http.post("http://localhost:52276/api/Team/AddTeam",team);
  }

  Delete(No)
  {
      return this.http.delete("http://localhost:52276/api/Team/"+No);
  }

  GetDataByID(No)
  {
      return this.http.get("http://localhost:52276/api/Team/"+No);
  }

  Update(teamdata)
  {
    console.log("prit here , hello");
    console.log(teamdata);
    return this.http.put("http://localhost:52276/api/Team",teamdata);
  }


}
