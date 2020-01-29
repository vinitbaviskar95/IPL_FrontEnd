import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerdata;
  flag:any;
  constructor(private service : PlayerService,public router:Router) { }
message;
  ngOnInit() 
  {
    console.log("Team Complonent Loaded");
    let resultstate= this.service.GetPlayer();
    this.flag=sessionStorage.getItem("UserId");
    if(this.flag == null)
   {
     console.log("inside if");
     this.router.navigate(['/signin']);
   }
   else
   {
    console.log(this.flag);
    var id = this.flag;
    if(id==1)
    {
      this.flag = 1;
    }
    else
    {
      this.flag = 0;
    }
    
    resultstate.subscribe((data)=>{
      this.playerdata=data['Data'];
      console.log(data);
      console.log(this.playerdata);
    });
  }
  }

  Delete(PlayerId)
  {
    //console.log(data);
    let statusOfDelete= this.service.Delete(PlayerId);
    statusOfDelete.subscribe((result:any)=>{
      console.log(PlayerId);
      if(result.affectedRows>0)
      {
        this.router.navigate(['/player']);
      }
      else
      {
        this.message = "Something went wrong!";
      }
    });
  }
}
