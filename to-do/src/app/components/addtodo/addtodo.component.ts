import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtodo',
  imports: [FormsModule],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent {
  todoTitle: string = '';
  
  constructor(private todoService: TodoService) {}

  addTodo() {
    if(this.todoTitle.trim()) {
      this.todoService.addTodo(this.todoTitle);
      this.todoTitle = '';
    }
  }
}
