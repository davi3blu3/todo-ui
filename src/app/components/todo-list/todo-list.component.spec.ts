import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from 'src/app/services/todo.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let mockTodoService;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    mockTodoService = {
      todoList: jasmine.createSpyObj('todoList', ['subscribe'])
    };

    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{ provide: TodoService, useValue: mockTodoService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
