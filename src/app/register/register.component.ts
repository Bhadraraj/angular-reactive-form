import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Create User';
  EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
  user: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.user = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
      password: ["", [Validators.required, CustomValidators.passwordStrength]],
      confirmPassword: ["", Validators.required],
      phone: ['', [Validators.required, CustomValidators.ValidatePhone]],
    },
    );

  }

  onsubmit() {
    this.submitted = true;
    console.log(this.user.value)
    if (!this.user.valid) {
      alert("Please fill all the field to create super hero")
    } else {
      this.user.reset();
      this.submitted = false;
      alert("registered Successfull");
      this.user.reset();
      return console.log(this.user.value);
    }
  }
}
