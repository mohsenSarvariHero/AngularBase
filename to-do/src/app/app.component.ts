import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddtodoComponent } from "./components/addtodo/addtodo.component";
import { TodolistComponent } from "./components/todolist/todolist.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddtodoComponent, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
