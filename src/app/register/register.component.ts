import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup;
  constructor( private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.registerFrom = this.formBuilder.group({});

  }

}
