import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata;
  message;
  constructor(private service: UserService, 
    public router : Router) { }

  ngOnInit()
  {
    console.log("User Complonent Loaded");
    let resultstate=this.service.GetUser();
    resultstate.subscribe((data)=>{
      this.userdata=data['Data'];
      console.log(data);
      console.log(this.userdata);
    });
  }

}
