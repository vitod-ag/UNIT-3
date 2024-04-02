import { Component } from '@angular/core';
import { Login } from 'src/app/interfaces/login.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  loginForm!: NgForm;       // mi creo un oggetto form di tipo angular form
  username = '';
  password = '';
  loggedUser!: Login;       // mi creo un oggetto utente loggato di tipo angular interfaccia Login
  logged: boolean = false;

  submit(form: NgForm) {
      this.loginForm = form;
      this.loggedUser = form.value;
      this.logged = true;
      console.log(this.loggedUser);
      
  }

}
