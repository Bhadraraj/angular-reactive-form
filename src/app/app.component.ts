import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration-Form';
  EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
  user: FormGroup

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.user = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
      password: ["", [Validators.required, CustomValidators.passwordStrength]],
      confirmPassword: ["", [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

    },
      { validator: CustomValidators.passwordMatcher });

  }
  get f() {
    return this.user.controls;
  }
  onSubmit(formdata: any) {
    console.log(formdata)
    console.log(this.user.value, this.user.valid)
  }
}
