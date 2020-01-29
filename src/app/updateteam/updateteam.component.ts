import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-updateteam',
  templateUrl: './updateteam.component.html',
  styleUrls: ['./updateteam.component.css']
})
export class UpdateteamComponent implements OnInit {
  teamdata:any;
  message;
  constructor(public routes: ActivatedRoute,public service:TeamService, public router:Router) { }

  ngOnInit() 
  {
    let parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
      let No = params.get("TeamId");
      console.log(No);
      let StatusofEmpSearched= this.service.GetDataByID(No);

      StatusofEmpSearched.subscribe((result:any)=>{
        console.log(result);
        if(result.Status=='Success')
        {
          this.teamdata = result.Data;
          this.message = "Record found!" 
  }

});
});

}

Update()
{
  let statusOfUpdate= this.service.Update(this.teamdata);
  console.log(this.teamdata);
  statusOfUpdate.subscribe((result:any)=>{
    if(result.Status=="Success")
    {
      
      this.router.navigate(['/team']);
    }
    else{
      this.message = "Something went wrong!";
    }
  });
}



}
