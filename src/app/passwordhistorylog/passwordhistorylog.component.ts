import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwordhistorylog',
  templateUrl: './passwordhistorylog.component.html',
  styleUrls: ['./passwordhistorylog.component.css']
})
export class PasswordhistorylogComponent implements OnInit {
  pass;
  id;
  message;
  constructor(private service: AccountService, 
    public router : Router) 
  { 
   // console.log("Home.Component.JS: Home Component Created");
  }

  ngOnInit() 
  {
    this.id = sessionStorage["RoleId"];
    if(this.id != "1")
    {
        this.router.navigate(["/signin"]);
    }
    else
    {
    let resultstate=this.service.PassHistory();
    resultstate.subscribe((data)=>{
      this.pass= data;
    });
  }
  }

}
