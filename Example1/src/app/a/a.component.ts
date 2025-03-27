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
   uname = ""
  uemail = ""
  addUser(){
   var user :User = new User(this.id, this.name, this.email)
   this.service.users.push(user)

  }

  updateUser(){

    var result   = this.service.getUserById(this.id)
    if (result){
      result.name = this.uname
      result.email = this.uemail
    }else{
      alert("invalid user id")
    }
    
 
   }
}
