import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);
  private filter: 'all' | 'completed' | 'pending' = 'all';

  constructor(private notificationService: NotificationService) {}

  private saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  setFilter(filter : 'all' | 'completed' | 'pending' ){
    this.filter = filter;
    this.updateFilterdTodos();
  }

  todos$ = this.todosSubject.asObservable();

  private updateFilterdTodos(){
    let filteredTodos = this.todos;
    if(this.filter === 'completed'){
      filteredTodos=this.todos.filter(todo => todo.completed)
    }else if(this.filter === 'pending'){
      filteredTodos = this.todos.filter(todo => !todo.completed)
    }
    this.todosSubject.next(filteredTodos);
  }

  addTodo(title: string) {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    this.todos.push(newTodo);
    this.todosSubject.next(this.todos);
    this.saveToLocalStorage();
    this.notificationService.showNotification('✅ Task Added!');
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(this.todos);
    this.saveToLocalStorage();
    this.notificationService.showNotification('🔄 Task Updated!');
  }
  
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next(this.todos);
    this.saveToLocalStorage();
    this.notificationService.showNotification('❌ Task Deleted!');
  }

  updateTodo(id: number, newTitle: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    this.todosSubject.next(this.todos);
    this.saveToLocalStorage();
    this.notificationService.showNotification('🔄 Task Updated!');

  }
}
