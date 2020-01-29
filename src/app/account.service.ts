import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public http: HttpClient) { }

PassHistory()
{
  return this.http.get("http://localhost:52276/api/Login/PasswordHistory")
}
Login(user)
{
  return this.http.post("http://localhost:52276/api/User/Login",user);
}

GetOnlineUsers()
{
  return this.http.get("http://localhost:52276/api/User/OnlineUsers");
}


Add(user)
{
  return this.http.post("http://localhost:52276/api/User/Registration",user);
}

OTPGenerate(email)
{

    var RUser={
      "EmailId":email,
      
     };
    return this.http.post("http://localhost:52276/api/Account/IsExist", RUser);
}

statusoffline(EmailId)
{
    var RUser={
      "EmailId":EmailId,
      
     };
     console.log(EmailId);
    return this.http.put("http://localhost:52276/api/User/statusoffline", RUser);
}



  OTPValidate(otp,email)
  {
 
    var RUser={
      
      "EmailId":email,
      "OTP":otp
     };
   
     console.log(RUser);
    
    return this.http.post("http://localhost:52276/api/Account/OTP", RUser);
  }

  Passwordreset(password,email)
  {

     var RUser={
      "EmailId":email,
      "Password":password,
      
     };

      console.log(RUser);
     
    return this.http.put("http://localhost:52276/api/Account/UpdatePassword", RUser);
  }

  ChangePassword(EmailId,Password,Npassword)
  {
    console.log("Service");
    
    var userobj = {
      "EmailId":EmailId,
      "Password":Password,
      "NewPassword":Npassword
    }

    console.log(userobj);

    return this.http.put("http://localhost:52276/api/User/ChangePassword",userobj);
    
  }

}
