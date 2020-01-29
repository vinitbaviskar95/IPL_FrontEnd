import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  flag:Number = 0; 
  email:string = "";
  password:string = "";
  password2:string = "";
  otp:string = "";
  constructor(public service : AccountService,private router : Router ) { }

  ngOnInit() {
  }

  generateOTP()
  {
    alert("In generate otp");
    let resultstate=this.service.OTPGenerate(this.email);
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.Status);
      console.log(data);
      alert("Your OTP :"+data.Data);
      if(data.Status=="success")
      {
        this.flag=1;
      }
    });
  }

  validateOTP()
  {
    alert("In validate otp");
    let resultstate=this.service.OTPValidate(this.otp,this.email);
    
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.Status);
      if(data.Status=="success")
      {
       
        // this.router.navigate(['/changepassword'])
        alert("valid OTP");
        this.flag=2;
 
      }
      
    }); 
    
  }

  resetPassword()
  {
    alert("In Reset otp");
    let resultstate=this.service.Passwordreset(this.password,this.email);
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.Data);
      if(data.Status=="success")
      {
        this.router.navigate(['/signin'])
 
      }
      
    }); 
    
    
  }
}
