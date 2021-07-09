import React, { FC, ReactElement, useCallback, useEffect, useReducer, useState } from 'react';
import TdInput from './Input';
import TdList from './List';
import Time from '../Time';
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

    const time = new Date()

  return (
    <div className="flex-1 h-full px-4 backdrop-filter backdrop-blur-md bg-opacity-80 bg-gray-100 dark:bg-gray-500 dark:bg-opacity-90">
      <div className="text-4xl font-bold text-gray-800 mt-6">我的一天</div>
      <Time />
      <TdInput
          addTodo = {addTodo}
          todoList = {state.todoList}
        />
      <TdList
          todoList = {state.todoList}
          removeTodo = {removeTodo}
          toggleTodo = {toggleTodo}
        />
    </div>
  )
}

export default TodoList;
