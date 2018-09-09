import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' , '../../assets/css/main.css' , '../../assets/css/util.css'],
  encapsulation: ViewEncapsulation.Native
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
