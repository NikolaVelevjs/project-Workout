import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = ""

  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.pattern('[A-z0-9]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    repass: new FormControl('')
  })
  constructor(private _auth: AuthService, private router: Router) { }
  register() {
    this._auth.registerUser(this.registerForm.value)
      .subscribe(
        res => {
          console.log(res)
          const email = res.email
          const username = res.username
          const id = res._id
          localStorage.setItem('email', email)
          localStorage.setItem("username", username)
          localStorage.setItem('id', id)
          this.router.navigateByUrl('/home')
        },
        err => alert(err.error)
      )
  }

  registerUser() {
    console.warn(this.registerForm.value)
  }

  get username() {
    return this.registerForm.get('username')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get repass() {
    return this.registerForm.get('repass')
  }
  ngOnInit(): void {

  }



}