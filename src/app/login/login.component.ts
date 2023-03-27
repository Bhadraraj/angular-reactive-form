import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  passwordShow: boolean = false;
  public submitted: boolean = false;
  userService: any;
  addForm: any;
  showMsg: boolean=false;
  title='Login';
  emailphone='/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/'
  constructor(
    private fb: FormBuilder) {
  }
  signinForm = this.fb.group({
    emailphone: [null, [Validators.required, Validators.pattern(this.emailphone)]],
    password: [null, [
      Validators.required, Validators.minLength(8),
    ]],
  });

  ngOnInit(): void {
  }

  onsubmit() {
  
    console.log(this.signinForm.value)
    if (!this.signinForm.valid) {
      alert("please fill al the field");
      this.submitted = true;

    } else {
      alert("login successfully")
      this.signinForm.reset();
      this.submitted=false;
      return console.log(this.signinForm.value);
    }
  }
  get f() {
    return this.signinForm.controls;
  }
  showPassword() {
    this.passwordShow = !this.passwordShow
  }

}
