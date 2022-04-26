import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: "",
    password: ""
  }
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const email = this.loginUserData.email

    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem("username", res.username)
          localStorage.setItem("email", email)
          localStorage.setItem('id', res._id)

          this.router.navigateByUrl('/home');
        },
        err => alert(err.error)
      )

    
  }


  gotoPage() {
    this.router.navigateByUrl('/resetPassword')
  }
}
