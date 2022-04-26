import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDietComponent } from './create-diet/create-diet.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { DietComponent } from './diet/diet.component';
import { EditDietComponent } from './edit-diet/edit-diet.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenDietComponent } from './men-diet/men-diet.component';
import { MenWorkoutComponent } from './men-workout/men-workout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthenicationGuard } from './shared/authenication.guard';
import { WomenDietComponent } from './women-diet/women-diet.component';
import { WomenWorkoutComponent } from './women-workout/women-workout.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'myProfile/:id',
    component: ProfileComponent,
    canActivate: [AuthenicationGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent
  },
  {
    path: 'menWorkouts',
    component: MenWorkoutComponent
  },
  {
    path: 'createWorkout',
    component: CreateWorkoutComponent,
    canActivate: [AuthenicationGuard]
  },{
    path: 'createDiet',
    component: CreateDietComponent,
    canActivate: [AuthenicationGuard]
  },
  {
    path: 'menDiets',
    component: MenDietComponent
  },
  {
    path: 'womenWorkouts',
    component: WomenWorkoutComponent
  },
  {
    path: 'womenDiets',
    component: WomenDietComponent
  },{
    path: 'workout/:id',
    component: WorkoutComponent
  },
  {
    path: 'editWorkout/:id',
    component: EditWorkoutComponent,
    canActivate: [AuthenicationGuard]
  },
  {
    path: 'editDiet/:id',
    component: EditDietComponent,
    canActivate: [AuthenicationGuard]
  },
  {
    path: 'diet/:id',
    component: DietComponent
  }
  ,{
    path: '**',
    component: NotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
