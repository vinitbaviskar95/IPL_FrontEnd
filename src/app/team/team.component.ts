import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamdata;
  message;
  flag:any;
  constructor(private service: TeamService, 
    public router : Router) { }

  ngOnInit()    
  {
    console.log("Team Complonent Loaded");
    let resultstate= this.service.GetTeam();
    this.flag=sessionStorage.getItem("UserId");
    console.log(this.flag);
    var id = this.flag;
    if(id==1)
    {
      this.flag = 0;
    }
    else
    {
      this.flag = 1;
    }
    
    resultstate.subscribe((data)=>{
      this.teamdata=data['Data'];
      console.log(data);
      console.log(this.teamdata);
    });
  }

  Delete(TeamId)
  {
    //console.log(data);
    let statusOfDelete= this.service.Delete(TeamId);
    statusOfDelete.subscribe((result:any)=>{
      console.log(TeamId);
      if(result.Status=="Success")
      {
        this.router.navigate[('/team')];
      }
      else
      {
        this.message = "Something went wrong!";
      }
    });
  }

}
