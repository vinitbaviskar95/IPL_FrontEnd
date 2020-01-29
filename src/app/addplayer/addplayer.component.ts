import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
message;
  constructor(public service : PlayerService,public router:Router) { }

  ngOnInit() {   }

  AddPlayer(myForm)
  {
    let data = myForm.form.value;
    this.service.AddPlayer(data).subscribe(()=>
    {
      if(data.error==null)
      {
      this.message = "Record Inserted!";
      
      this.router.navigate(['/player']);
      }
      else
      {
        console.log(data);
        this.message = "Something Wrong";
      }
      
    });
  }

}
