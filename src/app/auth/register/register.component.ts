import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/RegisterForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  submit() {
    console.log(this.registerForm);
  }
}
