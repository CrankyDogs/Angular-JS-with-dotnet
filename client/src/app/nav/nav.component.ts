import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model : any = {};
  // loggedin : boolean;
  constructor(public accountService :AccountService, private router : Router, private toastr : ToastrService){}
  ngOnInit(): void {
    // this.getCurrentUser();

  }

  login(){
    this.accountService.login(this.model).subscribe(response =>
      {
        this.router.navigateByUrl('/members');
        // console.log(response);
        // this.loggedin = true;
      }, error => {
        console.log(error);
        this.toastr.error(error.error);
      })

  }
  loggedout(){
    // this.loggedin = false;
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }


}
