import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../services/todo.service';
import { TodoItem } from './../../data/todo-item';
import { Observable } from 'rxjs';

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
}
