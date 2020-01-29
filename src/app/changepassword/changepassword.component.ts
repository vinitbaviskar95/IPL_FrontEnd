import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
message : string;
EmailId:string;
Password:string;
Npassword:string;
Cpassword:string;

constructor(private service:AccountService,public router:Router)
 {this.router=router;    }

ngOnInit() {

  var id = sessionStorage.getItem("UserId");
  if(id == null)
  {
    this.router.navigate(['/Login']);
  }
}




ChangePassword()
{
this.EmailId= sessionStorage.getItem("EmailId");
console.log("email id is "+this.EmailId)
console.log("change password "+this.Password+this.EmailId);
let resultstate = this.service.ChangePassword(this.EmailId,this.Password,this.Npassword);

resultstate.subscribe((data:any)=>
{
  if(data.Status=='Success')
  {
    alert("Password Changed Successfully !!") ;
    this.router.navigate(['/signin']);
  }
  else
  {
    alert("Enter correct data !!") ;
    console.log(data);
    this.message="something wrong !!!";
  }

});
}

}

