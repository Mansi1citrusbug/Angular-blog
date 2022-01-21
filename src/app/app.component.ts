import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Satsang';
  users=[{
    name:"mansi",
    age:20,
    add:"Ahmd"
  },
  {
    name:"Ravi",
    age:30,
    add:"Ahmd"
  },
  {
    name:"Krupal",
    age:27,
    add:"Ahmd"
  }
]
  clickevent(){
    this.title = 'Jay Ho Vicky BABA ki..!!';
  return this.title;
  }
}
