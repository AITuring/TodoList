import React, { FC, ReactElement, useCallback, useEffect, useReducer, useState } from 'react';
import TdInput from './Input';
import TdList from './List';
import { IState, ITodo } from './typings';

const TodoList: FC = (): ReactElement => {

  // const [todoList, setTodoList] = useState<ITodo[]> ([]);
  const initialState: IState = {
    todoList: []
  }

  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    console.log(state.todoList);
  }, [state.todoList])


  const addTodo = useCallback((todo: ITodo) => {
    console.log(todo);
    // setTodoList(todoList => [...todoList, todo]);
    },[])

  return (
    <div className="todo-list">
      <TdInput
        addTodo = {addTodo}
        todoList = {state.todoList}
      />
      <TdList />
    </div>
  )
}

export default TodoList;
