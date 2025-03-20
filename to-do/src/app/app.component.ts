import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddtodoComponent } from "./components/addtodo/addtodo.component";
import { TodolistComponent } from "./components/todolist/todolist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddtodoComponent, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
  }

  ngOnInit() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    this.isDarkMode = savedDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    }
  }
}
