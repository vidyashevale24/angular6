import { Component, OnInit } from '@angular/core';
import {register} from 'ts-node';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg={
        email:"",
        firstname:"",
        lastname:"",
        passwd:""
  }
  constructor() { }

  ngOnInit() {
  }

  register(data){
        console.log(data)
    }
}
