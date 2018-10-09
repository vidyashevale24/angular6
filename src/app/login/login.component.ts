import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' , '../../assets/css/main.css' , '../../assets/css/util.css'],
  encapsulation: ViewEncapsulation.Native
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  constructor(private  _fb: FormBuilder) {
      this.loginForm = this._fb.group({
          username: ['Vidya', [Validators.required , Validators.pattern('[A-Za-z0-9]{3,}[@][A-Za-z0-9]{2,}[.][A-Za-z0-9]{2,}')]],
          password: ['123', [Validators.required]]
      });
  }

  ngOnInit() {
  }

}
