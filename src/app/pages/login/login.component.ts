import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
      showPassword: ['']
    });
  }

  onSubmit() {
    if(this.loginForm.valid){
      const emailControl = this.loginForm.get('email');
      const passwordControl = this.loginForm.get('password');

      if(emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;

        console.log('Email:', email);
        console.log('Password:', password);
      }
    }
  }

}
