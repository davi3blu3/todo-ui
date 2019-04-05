import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../services/todo.service';
import { TodoItem } from './../../data/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      res => {
        this.todoList = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  handleCheck(item) {
    this.todoService
      .updateTodo(item)
      .subscribe(
        data => console.log('success', data),
        error => console.log('error', error)
      );
  }
}
