import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthenicationService } from '../shared/authenication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _id: any
  constructor(public _authService: AuthenicationService, private router: Router) {

   }

  ngOnInit(): void {
    this._id = localStorage.getItem('id')
  }
  
  logOut(){
    localStorage.clear()
  }


}