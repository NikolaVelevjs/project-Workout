import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: any
  email: any
  workouts: any[] = [];
  likes: any = 0
  program = {}
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this._auth.myProfile()
      .subscribe(
        res => {
          res.map((workout: any) => {
            if (workout.email == localStorage.getItem('email')) {
              this.workouts.push(workout)
            }
          })
        },
        err => console.log(err)
      )
    this.username = localStorage.getItem('username')
    this.email = localStorage.getItem('email')



  }



}
