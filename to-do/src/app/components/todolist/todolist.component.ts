import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule,CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  todos:Todo[] = [];
  // private todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  constructor(private todoService:TodoService){}

  ngOnInit(){
    this.todoService.todos$.subscribe(todos =>{
      this.todos = todos
    })
  }

  toggleTodo(id:number){
    this.todoService.toggleTodo(id)
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo(id)
  }

  setFilter(filter:'all' |  'completed' | 'pending'){
    this.todoService.setFilter(filter)
  }

  editingTodoId: number | null = null;
  editingTitle: string = '';

  editTodo(todo: Todo) {
    this.editingTodoId = todo.id;
    this.editingTitle = todo.title;
  }
  
  updateTodo(id: number) {
    if (this.editingTitle.trim()) {
      this.todoService.updateTodo(id, this.editingTitle);
    }
    this.editingTodoId = null;
  }
  
}
