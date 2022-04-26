import { ApplicationInitStatus, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  registerUser(user: object) {
    return this.http.post<any>(this.Url + '/register', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  loginUser(user:object){
    return this.http.post<any>(this.Url + '/login', user)
  }
  
  resetPassword(email: object){
    return this.http.post<any>(this.Url + '/resetPassword', email)
  }

  createWorkout(workout: object){
    return this.http.post<any>(this.Url + "/createWorkout", workout)
  }
  createDiet(diet: object){
    return this.http.post<any>(this.Url + "/createDiet", diet)
  }
  getWorkouts(program: object){
    return this.http.post<any>(this.Url + "/menWorkouts", program)
  }
  myProfile(){
    return this.http.get<any>(this.Url + "/myProfile")
  }
  exercise(id: string){
    return this.http.post<any>(this.Url + "/exercises", {id})
  }
  delete(id: any){
    return this.http.post<any>(this.Url + "/delete", {id})
  }
  likeWorkout(userEmail: any, workoutId: any){
    return this.http.post<any>(this.Url + "/like/workout", {userEmail, workoutId})
  }
  getAllWorkouts(){
    return this.http.get<any>(this.Url + "/getAllWorkouts")
  }
  getAllDiets(){
    return this.http.get<any>(this.Url + "/getAllDiets")
  }
  diet(id: string){
    return this.http.post<any>(this.Url + "/diet", {id})
  }
  likeDiet(userEmail: any, dietId: any){
    return this.http.post<any>(this.Url + "/like/diet", {userEmail, dietId})
  }
  editWorkout(workout: any, id: any){
    console.log(workout, id)
    return this.http.post<any>(this.Url + "/editWorkout", {workout, id})

  }
  editDiet(diet: any, id: any){
    return this.http.post<any>(this.Url + "/editDiet", {diet, id})

  }
}