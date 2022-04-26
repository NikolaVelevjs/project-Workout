import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {
  [x: string]: any;

  constructor() { }

  isLoggedIn(){
    return !!localStorage.getItem('email')
  }
}
