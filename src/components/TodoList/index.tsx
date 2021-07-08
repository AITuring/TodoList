import React, { FC, ReactElement, useCallback, useEffect, useReducer, useState } from 'react';
import TdInput from './Input';
import TdList from './List';
import { todoReducer } from './reducer';
import { ACTION_TYPE, IState, ITodo } from './typings';

const TodoList: FC = (): ReactElement => {

  // const [todoList, setTodoList] = useState<ITodo[]> ([]);
  // const initialState: IState = {
  //   todoList: []
  // }
  // 惰性初始化state
  function init(initTodoList: ITodo[]):IState {
    return {
      todoList: initTodoList
    }
  }

  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    console.log(state.todoList);
    // const todoStorage = JSON.parse(localStorage.getItem('todo') || '[]')
  }, [state.todoList])


  const addTodo = useCallback((todo: ITodo):void => {
    console.log(todo);
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    }
    )
    },[])

    const removeTodo = useCallback((id: number):void => {
      dispatch({
        type: ACTION_TYPE.REMOVE_TODO,
        payload: id
      })

    },[])

    const toggleTodo = useCallback((id: number):void => {
      dispatch(
        {
          type: ACTION_TYPE.TOGGLE_TODO,
          payload: id
        }
      )

    },[])

  return (
    <div className="w-2/3 h-full bg-gray-100 rounded-r-lg">
      <img src="https://images.unsplash.com/photo-1625526439553-08baa1794618?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=80" className="w-full h-1/3" />
      <div className="p-4">
      <TdList
          todoList = {state.todoList}
          removeTodo = {removeTodo}
          toggleTodo = {toggleTodo}
        />
        <TdInput
          addTodo = {addTodo}
          todoList = {state.todoList}
        />
      </div>
    </div>
  )
}

export default TodoList;
