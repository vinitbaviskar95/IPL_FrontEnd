import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onlineusers',
  templateUrl: './onlineusers.component.html',
  styleUrls: ['./onlineusers.component.css']
})
export class OnlineusersComponent implements OnInit {
  userdata;
  message;
  constructor(private service: AccountService, 
    public router : Router) { }

  ngOnInit() {
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/login']);
    }
    console.log("Online Users Component Loaded")
    let resultstate=this.service.GetOnlineUsers();
    resultstate.subscribe((data)=>{
      console.log("data in onlineusers is "+data['Data']);
      this.userdata = data['Data'];
     
    });
    console.log(this.userdata);
   }

}
