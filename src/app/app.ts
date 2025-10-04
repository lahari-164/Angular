import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Student,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css', 
styles : ['h1{ background-color : pink  ;}']  


})
export class App {
  protected readonly title = signal('webapp1');
  showBox = false;
  
 showBoxFn(){
  this.showBox =true
 }

  hideBoxFn(){
  this.showBox =false
 }

}

