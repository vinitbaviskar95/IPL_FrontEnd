import { Component, OnInit } from '@angular/core';
import { BidService } from '../bid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidhistory',
  templateUrl: './bidhistory.component.html',
  styleUrls: ['./bidhistory.component.css']
})
export class BidhistoryComponent implements OnInit {
  biddata:any[];
  flag:any;
  constructor(private service : BidService,public router:Router) { }
message;
  ngOnInit() 
  {
    console.log("Bid Complonent Loaded");
    let resultstate= this.service.GetBidHistory();
    this.flag=sessionStorage.getItem("UserId");
    if(this.flag == null)
   {
     this.router.navigate(['/signin']);
   }
   else
   {
    console.log(this.flag);
    var id = this.flag;
    if(id==1)
    {
      this.flag = 1;
    }
    else
    {
      this.flag = 0;
    }
    
    resultstate.subscribe((data:any)=>{
      this.biddata=data;
      //console.log(data);
      console.log(this.biddata);
    });
  }


}
}
