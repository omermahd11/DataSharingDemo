import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   user : User = new User(100 , "Reem" , "reem@gmail.com")
   users = [
    new User(100 , "Reem" , "reem@gmail.com"),
    new User(200 , "Tim" , "tim@gmail.com")

   ]
  constructor() { }

  getUser(): User{
    return this.user
  }
}
