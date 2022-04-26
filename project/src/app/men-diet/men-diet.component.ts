import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-men-diet',
  templateUrl: './men-diet.component.html',
  styleUrls: ['./men-diet.component.css']
})
export class MenDietComponent implements OnInit {

  Diet: any
  constructor(private _auht: AuthService, private router:Router) { }

  ngOnInit(): void {
    this._auht.getAllDiets()
    .subscribe(
      res=> {
        this.clear(this.sort(res, "All"))
      },
      err=> console.log(err)
    )
  }


  selected(e: { target: any; }){
    const program = {
      program: e.target.value
    }
    this._auht.getAllDiets()
    .subscribe(
      res=> {
        this.clear(this.sort(res, program.program))
      },
      err=> console.log(err)
    )
  }

  sort(Diet: any[], program : string){
    let sortedDiets = Diet.filter(diet=> diet.gender == "man")
    
    if(program == "All"){
      
      return sortedDiets.sort((a,b)=> b.likes - a.likes)

    }else{
      sortedDiets = sortedDiets.filter(diet=>diet.calories == program)
      sortedDiets = sortedDiets.sort((a,b)=> b.likes - a.likes)
      return sortedDiets
    }
  }

  clear(sortedDiet: any[]) {
    console.log(sortedDiet)
    const element = document.querySelector('tbody')
    const table = element?.parentElement
    element?.parentElement?.removeChild(element)
    const thead = document.querySelector('thead')
    const tbody = document.createElement('tbody')

    thead!.style.display = ''
    for (let i = 0; i < sortedDiet.length ; i++) {
      const tr = document.createElement('tr')
      const tdName = document.createElement('td')
      const tdCalories = document.createElement('td')
      const tdMeals = document.createElement('td')
      const tdLikes = document.createElement('td')
      const tdNomer = document.createElement('td')
      const tdId = document.createElement('td')
      const tdTitle = document.createElement('td')

      tdNomer.innerHTML = (i+1).toString()
      tr.appendChild(tdNomer)

      tdName.innerHTML = sortedDiet[i].username
      tr.appendChild(tdName)

      tdCalories.innerHTML = sortedDiet[i].calories
      tr.appendChild(tdCalories)

      tdTitle.innerHTML = sortedDiet[i].title
      tr.appendChild(tdTitle)

      tdMeals.innerHTML = Object.keys(sortedDiet[i].meals).length.toString()
      tr.appendChild(tdMeals)

      tdLikes.innerHTML = sortedDiet[i].likes
      tr.appendChild(tdLikes)

      tdId.innerHTML = sortedDiet[i]._id
      tdId.style.display = 'none'
      tr.appendChild(tdId)

      

      tr.addEventListener('click', (e)=>{
        const td = ( <HTMLElement>e.target ).parentNode
        console.log(td?.lastChild!.textContent)
        this.router.navigateByUrl('/diet/'+ td?.lastChild!.textContent)

      })
      tbody.appendChild(tr)
    }
    if(sortedDiet.length == 0){
      thead!.style.display = 'none' 
      const h2 = document.createElement('h2')
      h2.innerHTML = 'There is no workout for this program, but you can create one.'
      tbody.append(h2)
    }
    table?.appendChild(tbody)
  }
}
