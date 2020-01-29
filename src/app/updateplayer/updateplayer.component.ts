import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.component.html',
  styleUrls: ['./updateplayer.component.css']
})
export class UpdateplayerComponent implements OnInit {
  playerdata:any;
  message;
  constructor(public routes: ActivatedRoute,public service:PlayerService, public router:Router) {
    this.message="" 
   }

  ngOnInit() 
  {
    let parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
      let No = params.get("PlayerId");
      console.log(No);
      //console.log(params.get("No"));
      let StatusofPlayerSearched= this.service.GetDataByID(No);

      StatusofPlayerSearched.subscribe((result:any)=>{
        console.log(result);
        if(result.Status=='Success')
        {
          this.playerdata = result.Data;
          this.message = "Record found!" 
  }

});
});

}

Update()
{
  let statusOfUpdate= this.service.Update(this.playerdata);
  console.log(this.playerdata);
  statusOfUpdate.subscribe((result:any)=>{
    if(result.Status=="Success")
    {
      
      this.router.navigate(['/player']);
    }
    else{
      this.message = "Something went wrong!";
    }
  });
}


}
