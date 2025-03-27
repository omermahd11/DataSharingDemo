import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

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
}
