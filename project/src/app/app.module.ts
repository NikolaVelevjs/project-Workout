import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MenDietComponent } from './men-diet/men-diet.component';
import { MenWorkoutComponent } from './men-workout/men-workout.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { CreateDietComponent } from './create-diet/create-diet.component';
import { WomenDietComponent } from './women-diet/women-diet.component';
import { WomenWorkoutComponent } from './women-workout/women-workout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkoutComponent } from './workout/workout.component';
import { DietComponent } from './diet/diet.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { EditDietComponent } from './edit-diet/edit-diet.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    ResetPasswordComponent,
    MenDietComponent,
    MenWorkoutComponent,
    CreateWorkoutComponent,
    CreateDietComponent,
    WomenDietComponent,
    WomenWorkoutComponent,
    NotFoundComponent,
    WorkoutComponent,
    DietComponent,
    EditWorkoutComponent,
    EditDietComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
