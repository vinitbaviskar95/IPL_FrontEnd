import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
id:any;
name:any;
roleid:any;
  constructor(public router:Router,private service: AccountService) { }

  ngOnInit() {
    this.id= sessionStorage.getItem("UserId");
    this.roleid = sessionStorage.getItem("RoleId");
    console.log("RoleId  :" +this.roleid);
    
    this.name = sessionStorage.getItem("Name");
   console.log(this.id);

   if(this.id == null || this.roleid == 1)
   {
     this.router.navigate(['/signin']);
   }
  }

  Logout()
  {
   var EmailId =  sessionStorage.getItem("EmailId");
    console.log("EmailId is :"+EmailId);
    let result = this.service.statusoffline(EmailId);
    result.subscribe((data:any)=>
    {
      if(data.Status == 'Success')
      {
        delete sessionStorage["UserId"];
        delete sessionStorage["EmailId"];
        delete sessionStorage["RoleId"];
        delete sessionStorage["Name"];
        alert("logout successfully !!");
        this.router.navigate(['/signin']);

      }
      else
      {
        alert("something wrong !!");
      }
    });

  }

}
