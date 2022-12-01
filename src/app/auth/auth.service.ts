import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../types/LoginForm';
import { RegisterForm } from '../types/RegisterForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  constructor() { }
  login(form: LoginForm) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // const user = userCredential.user;
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match our records')
      }).finally(() => (this.isLoading = false));
  }
  register(registerForm: RegisterForm) {
    if (registerForm.password !== registerForm.confirmPassword) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => (this.isLoading = false))
  }
}
