import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Program';

  public num1:number;
  public num2:number;
  public num3:number;

  add(){
    this.num3=this.num1+this.num2;
  }

  subtract(){
    this.num3=this.num1-this.num2;
  }

  multiply(){
    this.num3=this.num1*this.num2;
  }

  division(){
    this.num3=this.num1/this.num2;
  }

}
