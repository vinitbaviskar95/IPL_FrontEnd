import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public service : AccountService,public router: Router) { }

  ngOnInit() {
  }

  Add(myForm)
  {
    let data = myForm.form.value;
    this.service.Add(data).subscribe(()=>
    {
    
      this.router.navigate(['/signin']);
    })
  }

}