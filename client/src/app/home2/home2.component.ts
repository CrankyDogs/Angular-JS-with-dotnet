import { Component } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
    register = false;
    registerToggle(){
      this.register = !this.register;
      console.log(this.register);
    }
}