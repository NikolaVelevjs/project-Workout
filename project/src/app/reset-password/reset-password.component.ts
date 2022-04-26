import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  userData = {
    email: "",
    password: ""
  }

  resetPassword() {
    if(this.userData.password.length < 5){
      alert("Password must be at least 5 characters")
      return
    }
    this._auth.resetPassword(this.userData)
      .subscribe(
        
        err => console.log(err)
      )
    this.router.navigateByUrl('/home')
  }
}
