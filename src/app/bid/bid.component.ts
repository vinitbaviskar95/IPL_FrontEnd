import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BidService } from '../bid.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  playerdata:any;
  message;
  id:any;
  No:any;
  Id:any;
  constructor(public routes: ActivatedRoute,public service:BidService, public router:Router) {
    this.message=""
   }

  ngOnInit() 
  {
    let parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
      this.No = params.get("PlayerId");
      
      console.log(this.No);
      //console.log(params.get("No"));
      let StatusofPlayerSearched= this.service.GetDataByID(this.No);

      StatusofPlayerSearched.subscribe((result:any)=>{
        console.log(result);
        if(result.Status=='Success')
        {
          this.playerdata = result.Data;
          this.message = "Record found!";
  }

});
});

}
AddPlayer(myForm)
{
  this.id= sessionStorage.getItem("UserId");
   console.log(this.id);
  
  let bidObj = {
    "PlayerId":this.No,
    "UserId":this.id,
    "Amount":this.playerdata.BasePrice,
  }
    this.service.Add(bidObj).subscribe((data:any)=>
    {
      if(data.Status=="Success")
      {
      this.message = "Record Inserted!";
    
      this.router.navigate(['/bidhistory']);
      }
      else
      {
        console.log(data);
        this.message = "Something Wrong";
      }
      
    });
  }

}
