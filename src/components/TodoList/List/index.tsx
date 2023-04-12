import { FC, ReactElement } from "react";
import TdItem from "./item";
import { ITodo } from "../typings";

interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TdList: FC<IProps> = ({
  todoList,
  toggleTodo,
  removeTodo,
}): ReactElement => {
  return (
    <>
      {/* <div className="w-6 my-6 p-4 rounded-lg cursor-pointer bg-gray-200"></div> */}
      <div className="sorted-by-completed mt-8 rounded-sm py-3 items-center outline-none rounded-md shadow-2xl bg-gray-100 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-50">
        <div className="mx-3">已完成</div>
        {todoList &&
          todoList
            .filter((todo) => todo.completed)
            .map((todo: ITodo) => {
              return (
                <TdItem
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              );
            })}
        <div className="mx-3">未完成</div>
        {todoList &&
          todoList
            .filter((todo) => !todo.completed)
            .map((todo: ITodo) => {
              return (
                <TdItem
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              );
            })}
      </div>
    </>
  );
};

export default TdList;
