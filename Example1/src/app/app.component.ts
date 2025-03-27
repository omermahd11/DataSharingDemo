import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [AComponent, BComponent , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements AfterViewInit {

  title = "Data Sharing Demo";

  parentMessage = "Hi from parent component"

  message  = ""
  @ViewChild(BComponent, {static:true}) child? : BComponent
  

  ngAfterViewInit(): void {
   
    if (this.child != null)
      this.message = this.child.childComponentMessage

  
  }
}
