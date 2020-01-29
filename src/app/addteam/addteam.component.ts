import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
  message;
  constructor(public service : TeamService,public router:Router) { }

  ngOnInit() {   }

  AddTeam(myForm)
  {
    let data = myForm.form.value;
    this.service.AddTeam(data).subscribe(()=>
    {
      if(data.error==null)
      {
      this.message = "Record Inserted!";
    
      this.router.navigate(['/team']);
      }
      else
      {
        console.log(data);
        this.message = "Something Wrong";
      }
      
    });
  }

}
