import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/RegisterForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService:AuthService){}
  registerForm: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  submit() {
    this.authService.register(this.registerForm);
  }
}
