import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TodoService } from 'src/app/services/todo.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass']
})
export class TodoAddComponent implements OnInit {
  @ViewChild('task') task: ElementRef;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  onAddClick(task) {
    this.task.nativeElement.value = '';
    this.todoService.postTodo(task).subscribe(
      data => {
        this.todoService.updateSubscription(data);
      },
      error => {
        console.log('error:', error);
      }
    );
  }
}
