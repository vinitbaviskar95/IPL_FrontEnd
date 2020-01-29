import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
flag:Number = 0; 
  constructor(public service: AccountService,public router:Router, private translateService: TranslateService) { 
    this.router=router;
    translateService.addLangs(["en", "jp", "hi"]);
    translateService.setDefaultLang("en"); 
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

  Login(userObj)
  {
    let resultset = this.service.Login(userObj.form.value);
    
    resultset.subscribe((res:any)=>
    {
      console.log(res);
      console.log(res.Data.RoleId);
  //    console.log(res.Data.EmailId);
      var role = res.Data.RoleId;
      sessionStorage.setItem("UserId",res.Data.UserId);
      sessionStorage.setItem("RoleId",res.Data.RoleId);
      sessionStorage.setItem("EmailId",res.Data.EmailId);
      
      
      sessionStorage.setItem("Name",res.Data.Name);
      
      if(res.Status=="Success")
      {
        if(role == 1)
        {
          this.flag=0; 
          console.log(this.flag);
          console.log("Admin Dashboard");
          this.router.navigate(['/dashboard']);
      }
      else
      {
        this.flag=1;
        console.log(this.flag);
        console.log("User Dashboard")
        this.router.navigate(['/userdashboard']);
      }
    }
    else
    {
      alert("Incorrect Email or Password");
    }
    })
  }
}
