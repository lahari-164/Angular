import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Student],
  templateUrl: './app.html',
  styleUrl: './app.css', 
styles : ['h1{ background-color : pink  ;}']  


})
export class App {
  protected readonly title = signal('webapp1');
}
