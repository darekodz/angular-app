import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/customValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(/\w{5,10}/)
      ]),
      birdthDate: new FormControl(null, [
        Validators.required,
        CustomValidators.pastDateReq
      ]),
      hobbies: new FormGroup({
        sport: new FormControl(),
        music: new FormControl(),
        travelleing: new FormControl()
      },
      [CustomValidators.atLeastOne]
      )
    });
  }

}
