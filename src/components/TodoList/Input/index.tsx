import React, { FC, useRef, ReactElement, useState } from "react";
import { ITodo } from "../typings";
import add from 'assets/add.png';

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputState, setInputState] = useState(false);

  const getKeyDown = (e: { key: string; } ) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  const inputChanged = (e: { target: { value: any; }; }) => {
    if (e.target!.value !== '') {
        setInputState(true);
    } else {
      setInputState(false);
    }
  }

  const addItem = (): void => {
    console.log(inputRef.current)
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
    <div className="w-full bottom-6 mt-8 rounded-sm p-3 flex items-center outline-none shadow-2xl bg-gray-100 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-50">
      <img src={add} className="w-7 block mr-2" />
      <input
        className="w-11/12 bg-gray-100 outline-none placeholder-gray-400 dark:bg-gray-700 dark:text-gray-50"
        type="text"
        placeholder="添加任务"
        ref={inputRef}
        onKeyDown={getKeyDown}
        onChange = {inputChanged}
        />
    </div>
  )
}

export default TdInput;
