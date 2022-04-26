import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  workout: any
  userEmail: any
  isLogged = localStorage.getItem('username')
  constructor(private route: ActivatedRoute, private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email')
    const id = this.route.snapshot.paramMap.get('id')
    this._auth.exercise(`${id}`)
      .subscribe(
        res => {
          this.workout = res
          this.show(this.workout)
        },
        err => console.log(err)
      )
  }
  show(workout: any) {
    const div = document.querySelector('.exercises')
    for (let key in workout.exercises) {
      let ul = document.createElement('ul')
      let li = document.createElement('li')
      let a = document.createElement('a')
      let img = document.createElement('img')

      a.innerHTML = workout.exercises[key]['linkAddress']
      a.href = workout.exercises[key]['linkAddress']
      img.src = workout.exercises[key]['imageAddress']
      img.className = "image"
      li.innerHTML = workout.exercises[key]["exercise"] + " - "
      li.appendChild(a)
      li.appendChild(img)
      ul?.appendChild(li)
      div?.appendChild(ul)
    }

  }
  editWorkout() {
    const id = this.route.snapshot.paramMap.get('id')
    this.router.navigateByUrl('/editWorkout/' + id)
  }
  deleteWorkout() {
    const id = this.route.snapshot.paramMap.get('id')
    this._auth.delete(id)
      .subscribe(
        res => this.router.navigateByUrl('home'),
        err => console.log(err)
      )
  }

  like() {
    const userEmail = localStorage.getItem('email')
    const workoutId = this.route.snapshot.paramMap.get('id')

    this._auth.likeWorkout(userEmail, workoutId)
      .subscribe(
        res => {
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);

        },
        err => alert(err.error)
      )
  }
}
