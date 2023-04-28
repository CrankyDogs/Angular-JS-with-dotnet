import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model : any = {};
  // loggedin : boolean;
  constructor(public accountService :AccountService){}
  ngOnInit(): void {
    // this.getCurrentUser();

  }

  login(){
    this.accountService.login(this.model).subscribe(response =>
      {
        console.log(response);
        // this.loggedin = true;
      }, error => {
        console.log(error);
      })
  }
  loggedout(){
    // this.loggedin = false;
    this.accountService.logout();
  }


}
