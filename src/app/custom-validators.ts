import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static emailPhone(control: AbstractControl) {

    if (CustomValidators.isEmptyValue(control.value)) {
      return null;
    }
    return control.value.match(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/) ? null : { 'invalidEmailphone': true };
  }

  
  static passwordStrength(control: AbstractControl) {

    if (CustomValidators.isEmptyValue(control.value)) {
      return null;
    }

    return control.value.match(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/) ? null : { 'weakPassword': true };
  }


  static isEmptyValue(value: any) {
    return value === null || typeof value === 'string' && value.length === 0;
  }

  static ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
    if (control.value && control.value.length != 10) {
      return { 'phoneNumberInvalid': true };
    }
    return null;
  }



}

