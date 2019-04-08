import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';
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

  // TODO: All methods for displaying total todo list should be moved into AppComponent? or TodoService?
  // Because the full list is impacted by the Add, while Complete and Delete just affect the list
  ngOnInit() {
    this.todoService.observeTodos().subscribe(data => {
      this.todoList = data;
    });
    console.log('component todoList:', this.todoList);
  }

  onCheckToggle(item) {}

  onDeleteClick(id) {}
}
