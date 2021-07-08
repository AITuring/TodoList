import React, { FC, useRef, ReactElement } from "react";
import { ITodo } from "../typings";

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getKeyDown = (e: { key: string; } ) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim();
    if (val.length) {
      const isExist = todoList.find(todo => todo.content === val);
      if (isExist) {
        alert('已存在该事项！');
        return;
      }

      addTodo ({
        id: new Date().getTime(),
        content: val,
        completed: false
      });

      inputRef.current!.value = '';
    }
  }

  return (
    <div className="w-full bottom-4">
      <input
        className="w-full mt-8 rounded-lg py-3 px-6 bg-gray-300 outline-none placeholder-gray-400 dark: bg-gray-700 text-gray-50"
        type="text"
        placeholder="添加任务"
        ref={inputRef}
        onKeyDown={getKeyDown}
        />
      {/* <button
        className="rounded-r-lg py-3 px-6 bg-green-600 font-semibold text-gray-50"
        onClick={ addItem }
      >
        增加
      </button> */}
    </div>
  )
}

export default TdInput;
