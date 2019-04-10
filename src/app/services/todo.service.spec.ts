import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('Todo Service', () => {
  let mockHttpService: HttpClient;

  beforeEach(() => {
    // mockHttpService = jasmine.createSpyObj('httpService', [
    //   'get',
    //   'post',
    //   'put',
    //   'delete'
    // ]);
  });

  describe('-UpdateSubscription', () => {
    it('should correctly sort todo objects', () => {
      const todoSvc = new TodoService(mockHttpService);
      const orderedTODOS = [
        { id: 1, name: 'Wash Dishes', isComplete: false },
        { id: 2, name: 'Take Out Garbage', isComplete: false },
        { id: 3, name: 'Mow Lawn', isComplete: true },
        { id: 4, name: 'Trim Hedges', isComplete: false },
        { id: 5, name: 'Mop Kitchen', isComplete: false }
      ];
      const unorderedTODOS = [
        { id: 4, name: 'Trim Hedges', isComplete: false },
        { id: 2, name: 'Take Out Garbage', isComplete: false },
        { id: 5, name: 'Mop Kitchen', isComplete: false },
        { id: 3, name: 'Mow Lawn', isComplete: true },
        { id: 1, name: 'Wash Dishes', isComplete: false }
      ];
      todoSvc.todoList = jasmine.createSpyObj('todoList', ['next']);

      todoSvc.updateSubscription(unorderedTODOS);

      expect(todoSvc.todoList.next).toHaveBeenCalledWith(orderedTODOS);
    });
  });
});
