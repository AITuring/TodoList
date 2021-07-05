export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export interface IState {
  todoList: ITodo[];
}
