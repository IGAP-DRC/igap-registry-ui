import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginUseCase } from '../../../domain/usecases/user/user-login.usecase';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder, private auth:UserLoginUseCase, private router:Router){
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }


  onLogin(){
    this.auth.execute(this.loginForm.value).subscribe({
      next: (response)=>{
        localStorage.setItem("data", response);
        this.router.navigate(['/dashboard/home']);
      },
      error: (error)=>{
        alert(error);
      }
    })
  }
}
