import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../../User';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

 @Input() message = ""

 childComponentMessage = "Hi from Component B"
 service : DataService
 constructor (service : DataService){
  this.service = service
 }

 user : User =  new User(10,"", "")

 users :User[] = []

 getData(){
  this.user = this.service.getUser()
  this.users = this.service.users
 }


}
