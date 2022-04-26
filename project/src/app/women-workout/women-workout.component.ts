import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-women-workout',
  templateUrl: './women-workout.component.html',
  styleUrls: ['./women-workout.component.css']
})
export class WomenWorkoutComponent implements OnInit {

  workouts: any
  constructor(private _auht: AuthService, private router: Router) { }

  ngOnInit(): void {
    this._auht.getAllWorkouts()
      .subscribe(
        res => {
          this.clear(this.sort(res, "All"), "All")
          console.log(res)
        },
        err => console.log(err)
      )
  }


  selected(e: { target: any; }) {
    const program = {
      program: e.target.value
    }
    this._auht.getWorkouts(program)
      .subscribe(
        res => {
          console.log(program.program)
          this.clear(this.sort(res, program.program), program.program)
        },
        err => console.log(err)
      )
  }

  sort(Workouts: any[], program: string) {
    let sortedWorkouts = Workouts.filter(workout => workout.gender == "woman")
    if (program == "All") {

      return sortedWorkouts.sort((a, b) => b.likes - a.likes)

    } else {
      sortedWorkouts = sortedWorkouts.filter(workout => workout.program == program.toLowerCase())
      sortedWorkouts = sortedWorkouts.sort((a, b) => b.likes - a.likes)
      console.log(sortedWorkouts)
      return sortedWorkouts
    }
  }

  clear(sortedWorkouts: any[], program: any) {
    const element = document.querySelector('tbody')
    const table = element?.parentElement
    const thead =  document.querySelector('thead') 

    element?.parentElement?.removeChild(element)

    const tbody = document.createElement('tbody')
    thead!.style.display = ""
    for (let i = 0; i < sortedWorkouts.length; i++) {
      const tr = document.createElement('tr')
      const tdName = document.createElement('td')
      const tdDifficulty = document.createElement('td')
      const tdExercises = document.createElement('td')
      const td4Likes = document.createElement('td')
      const td5Nomer = document.createElement('td')
      const td6Id = document.createElement('td')

      td5Nomer.innerHTML = (i + 1).toString()
      tr.appendChild(td5Nomer)

      tdName.innerHTML = sortedWorkouts[i].username
      tr.appendChild(tdName)

      tdDifficulty.innerHTML = sortedWorkouts[i].difficulty
      tr.appendChild(tdDifficulty)

      if (program == "All") {
        
        const tdMucleGroup = document.createElement('td')
        tdMucleGroup.innerHTML = sortedWorkouts[i].program
        tr.appendChild(tdMucleGroup)

      }
      
      tdExercises.innerHTML = Object.keys(sortedWorkouts[i].exercises).length.toString()
      tr.appendChild(tdExercises)

      td4Likes.innerHTML = sortedWorkouts[i].likes
      tr.appendChild(td4Likes)

      td6Id.innerHTML = sortedWorkouts[i]._id
      td6Id.style.display = 'none'
      tr.appendChild(td6Id)

      tr.addEventListener('click', (e) => {
        const td = (<HTMLElement>e.target).parentNode
        console.log(td?.lastChild!.textContent)
        this.router.navigateByUrl('/workout/' + td?.lastChild!.textContent)

      })
      tbody.appendChild(tr)
    }
    if(sortedWorkouts.length == 0){
      thead!.style.display = 'none' 
      const h2 = document.createElement('h2')
      h2.innerHTML = 'There is no workout for this program, but you can create one'
      tbody.append(h2)
    }
    if (sortedWorkouts.length != 0 && program == "All") {
      const th = document.querySelectorAll('.border-top-0')[2]
      const thProgram = document.createElement('th')
      thProgram.className = 'border-top-0'
      thProgram.id = "Program"
      thProgram.innerHTML = "Program"
      insertAfter(thProgram, th);

      console.log("wtf")

    }else if(document.querySelector("#Program")){
      document.querySelector("#Program")?.remove()
      console.log("wtg")
    }
    table?.appendChild(tbody)
  }

}

function insertAfter(newNode: any, existingNode: any) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}