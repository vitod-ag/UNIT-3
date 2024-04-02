import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from 'src/app/interfaces/signup.interface';
import { passwordMatch } from '../validators/password.validator';   // il validator creato

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  signupForm!: FormGroup;
  signup!: Signup;
  genders = ['Uomo','Donna'];

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        name: [null, [Validators.required]],
        surname: [null, [Validators.required]],
        username: [null, [Validators.required]],
        password: [null,[Validators.required, passwordMatch()],],
        passwordConf:  [null, [Validators.required]],
        gender:  [null, [Validators.required]],
        profileImage:  [null],
        bio: [null],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  getFormC(name:string) {
    return this.signupForm.get(name);
  }
  
  getErrorsC(name:string,error:string) {
    console.log(name,error);
    return this.signupForm.get(name)?.errors![error];
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const password = passwordControl ? passwordControl.value : null;
    const confirmPasswordControl = formGroup.get('passwordConf');
    const confirmPassword = confirmPasswordControl ? confirmPasswordControl.value : null;
    return password === confirmPassword ? null : { 'passwordUnmatch': true };
  }

  onSubmit() {
    this.signup = this.signupForm.value;
    console.log(this.signup);
    alert('Registrazione effettuata!!');
    this.signupForm.reset();    
  }



  
}
