import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  description = ""
  title = ""
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }



  addWorkout(e: any) {
    let gender = ""
    const radio  = document.querySelectorAll('#radio')
    for(let i =0; i<radio.length; i++){
      if((<HTMLInputElement>radio[i]).checked){
        gender = (<HTMLInputElement>radio[i]).value
        break
      }
    }

    
    let select = document.getElementById('select') as any
    let option = select.options[select.selectedIndex];
    
    let difficulty = document.getElementById('difficulty') as any
    let optionFordifficulty = difficulty.options[difficulty.selectedIndex];
    
    if((document.querySelector('.title') as HTMLInputElement).value == ""){
      return alert("Title is required")
    }

   
    let workout = {} as any
    workout["exercises"] ={}
    
    let index = 0
    const inputs = document.querySelectorAll('.input')
    for(let i  = 0; i< inputs.length /3; i++){

      if ((inputs[index] as HTMLInputElement).value == "" || (inputs[index+1] as HTMLInputElement).value == "" || (inputs[index+2] as HTMLInputElement).value == "") {
        return alert("All of the inputs are required")
      }
      const imageAddress =(inputs[index+1] as HTMLInputElement).value
      const linkAddress = (inputs[index+2] as HTMLInputElement).value
      const exercise = (inputs[index] as HTMLInputElement).value
      workout["exercises"][i] = {
        "exercise": exercise,
        "imageAddress": imageAddress,
        "linkAddress": linkAddress
      }
      index += 3
    }

    workout["title"] =(document.querySelector('.title') as HTMLInputElement).value
    workout["username"] = localStorage.getItem('username')
    workout['gender'] = gender
    workout['difficulty'] = optionFordifficulty.value
    workout['email'] = localStorage.getItem('email')
    
    if (this.description != "") {
      workout["description"] = this.description
    }
    workout["program"] = option.value

    this._auth.createWorkout(workout).subscribe(
      res => {
        this.router.navigateByUrl('/home')
          
        },
      err => console.log(err)
    )

    
  }


  show(e: { target: any; }) {
    const divs = document.querySelectorAll('.divs')
    const form = document.querySelector('form')

    if(divs.length < e.target.value){
      for(let i = 1;divs.length +i <= e.target.value; i++){
        let div = document.createElement('div')
        div.className = "divs"
        let inputExercise = document.createElement('input')
        inputExercise.className = 'input'
        inputExercise.placeholder = 'exercise'

        let inputImage = document.createElement('input')
        inputImage.className = 'input'
        inputImage.placeholder = 'link for image'

        let inputLink = document.createElement('input')
        inputLink.className = 'input'
        inputLink.placeholder = 'link for video'

        div.appendChild(inputExercise)
        div.appendChild(inputImage)
        div.appendChild(inputLink)

        form?.appendChild(div)
      }
    }else if(e.target.value < 1){
      alert("Must be a positive number")
    }else  if(divs.length > e.target.value){
      for(let i = divs.length -1; i>= e.target.value; i--){
        divs[i].remove()
      }
    }else {
      
      alert("Must be number")
    }
  }
  
}
