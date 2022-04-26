import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-diet',
  templateUrl: './edit-diet.component.html',
  styleUrls: ['./edit-diet.component.css']
})
export class EditDietComponent implements OnInit {
  description = ""
  title = ""
  constructor(private _auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  addDiet(e: any) {
    let gender = ""
    const radio = document.querySelectorAll('#radio')
    for (let i = 0; i < radio.length; i++) {
      if ((<HTMLInputElement>radio[i]).checked) {
        gender = (<HTMLInputElement>radio[i]).value
        break
      }
    }


    let select = document.getElementById('select') as any
    let option = select.options[select.selectedIndex];


    if ((document.querySelector('.title') as HTMLInputElement).value == "") {
      return alert("Title is required")
    }


    let diet = {} as any
    diet["meals"] = {}

    const inputs = document.querySelectorAll('.input')
    for (let i = 0; i < inputs.length; i++) {
      if ((inputs[i] as HTMLInputElement).value == "") {
        return alert("All of the inputs are required")
      }
      diet["meals"][i] = (inputs[i] as HTMLInputElement).value
    }

    diet["title"] = (document.querySelector('.title') as HTMLInputElement).value
    diet["username"] = localStorage.getItem('username')
    diet['gender'] = gender
    diet['email'] = localStorage.getItem('email')
    diet["calories"] = option.value

    if (this.description != "") {
      diet["description"] = this.description
    }

    const id = this.route.snapshot.paramMap.get('id')

    this._auth.editDiet(diet, id)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigateByUrl('/home')

        },
        err => console.log(err)
      )

  }


  show(e: { target: any; }) {
    const divs = document.querySelectorAll('.divs')
    const form = document.querySelector('form')

    if (divs.length < e.target.value) {
      for (let i = 1; divs.length + i <= e.target.value; i++) {

        let div = document.createElement('div')
        div.className = "divs"
        let meal = document.createElement('input')
        meal.className = 'input'
        meal.placeholder = 'meal'

        div.appendChild(meal)
        form?.appendChild(div)
      }
    } else if (e.target.value < 1) {
      alert("Must be a positive number")
    } else if (divs.length > e.target.value) {
      for (let i = divs.length - 1; i >= e.target.value; i--) {
        divs[i].remove()
      }
    } else {
      alert("Must be number")
    }
  }
}
