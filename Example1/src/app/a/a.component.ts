import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../../User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-a',
  imports: [FormsModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

   service :DataService
  constructor(service : DataService){

    this.service = service
  }
   
  id = 0
  name = "no name"
  email = "no email"
  addUser(){
   var user :User = new User(this.id, this.name, this.email)
   this.service.users.push(user)

  }
}
