import { Injectable, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { TodoItem } from './../data/todo-item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {
  private todoList: BehaviorSubject<TodoItem[]> = new BehaviorSubject<
    TodoItem[]
  >(null);

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('todo service initialized');
    this.updateTodoList();
  }

  observeTodos() {
    return this.todoList.asObservable();
  }

  updateTodoList() {
    this.apiService.getAllTodos().subscribe(data => {
      console.log('todo service updateTodoList was called');
      console.log('data:', data);
      this.todoList.next(data);
    });
  }

  // Called from Todo-List component

  // Called from Todo-Add component
  // public addNewTodo(task: string) {
  //   this.apiService.postTodo(task).subscribe(
  //     data => {
  //       this.todoList.push(data);
  //       console.log('task was added to todoList:', data);
  //     },
  //     error => console.log('error', error)
  //   );
  // }
}
