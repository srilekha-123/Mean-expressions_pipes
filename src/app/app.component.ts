import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './sril.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sri3';
  today:Date;
  constructor(){
    this.today=new Date;
  }
}
