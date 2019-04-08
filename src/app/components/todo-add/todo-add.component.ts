import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './../../services/api.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass']
})
export class TodoAddComponent implements OnInit {
  @ViewChild('task') task: ElementRef;
  @Output() todoAdded: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  onAddClick(task) {
    this.task.nativeElement.value = '';
  }
}
