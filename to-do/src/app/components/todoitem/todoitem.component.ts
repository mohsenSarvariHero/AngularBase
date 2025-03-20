import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css'
})
export class TodoitemComponent {
  @Input() todo!: Todo;
  isEditing: boolean = false;
  editedTitle: string = '';

  constructor(private todoService: TodoService) {}

  toggleTodo() {
    this.todoService.toggleTodo(this.todo.id);
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
  }

  startEditing() {
    this.isEditing = true;
    this.editedTitle = this.todo.title;
  }

  saveEdit() {
    if (this.editedTitle.trim()) {
      this.todoService.updateTodo(this.todo.id, this.editedTitle);
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
