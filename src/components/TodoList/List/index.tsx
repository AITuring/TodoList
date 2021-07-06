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
    <div className="mt-8 p-4 bg-green-300 bg-opacity-40 rounded-lg">
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
