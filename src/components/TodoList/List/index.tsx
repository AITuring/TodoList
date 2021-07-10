import React, { FC, ReactElement } from "react";
import TdItem from "./item";
import { ITodo } from "../typings";

interface IProps {
  todoList: ITodo[],
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TdList: FC<IProps> = ({
  todoList,
  toggleTodo,
  removeTodo
}): ReactElement=> {
  return (
    <div className="mt-8 rounded-sm p-3 items-center outline-none shadow-2xl bg-gray-100 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-50">
      {
        todoList && todoList.map((todo: ITodo)=> {
          return(
            <TdItem
              key= {todo.id}
              todo = {todo}
              removeTodo = {removeTodo}
              toggleTodo = {toggleTodo}
            />
          )
        })
      }
    </div>
  )
}

export default TdList;
