import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] =[]
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos)
  
  todos$ = this.todosSubject.asObservable();


  addTodo(title : string) {
    const newTodo: Todo = {id:Date.now(), title , completed:false};
    this.todos.push(newTodo);
    this.todosSubject.next(this.todos);
  }

  toggleTodo(id:number) {
    this.todos = this.todos.map(todo=> todo.id == id ? {...todo,completed : !todo.completed} : todo);
    this.todosSubject.next(this.todos)
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next(this.todos)
  }
  
  
  constructor() { }
}
