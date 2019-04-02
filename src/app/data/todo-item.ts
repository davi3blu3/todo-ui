export class TodoItem {
  public id?: number;
  public name: string;
  public isComplete: boolean;

  constructor(name, isComplete) {
    this.name = name;
    this.isComplete = isComplete;
  }
}
