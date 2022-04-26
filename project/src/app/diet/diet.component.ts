import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {
  diet: any
  userEmail: any
  isLogged = localStorage.getItem('username')
  constructor(private route: ActivatedRoute, private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email')
    const id = this.route.snapshot.paramMap.get('id')
    this._auth.diet(`${id}`)
      .subscribe(
        res => {
          console.log(res)
          this.diet = res
          this.show(this.diet)
        },
        err => console.log(err)
      )
  }
  show(diet: any) {
    const div = document.querySelector('.diets')
    for (let key in diet.meals) {
      console.log(key)
      let h4 = document.createElement('h4')
      h4.innerHTML = "-->    "+ diet.meals[key]
      div?.appendChild(h4)
    }

  }
  editWorkout() {
    const id = this.route.snapshot.paramMap.get('id')
    this.router.navigateByUrl('/editDiet/' + id)
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
    const dietId = this.route.snapshot.paramMap.get('id')

    this._auth.likeDiet(userEmail, dietId)
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
