import { FC, ReactElement } from "react";
import Icon from "../../Icon";
import { ITodo } from "../typings";
import deleteImg from "assets/delete.png";// 

interface IProps {
  todo: ITodo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const randomTree = () => {
  const min = 0;
  const max = 35;
  return Math.round(Math.random() * (max - min)) + min;
};

const randomLeaf = () => {
  const min = 0;
  const max = 7;
  return Math.round(Math.random() * (max - min)) + min;
};

const TdItem: FC<IProps> = ({ todo, toggleTodo, removeTodo }): ReactElement => {
  const { id, content, completed } = todo;

  return (
    <div
      className="h-13 leading-13 my-4 p-3 flex text-2xl items-center hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-2xl cursor-pointer"
      onClick={() => toggleTodo(id)}
    >
      {completed ? (
        <Icon name={`tree${randomTree()}`} onClick={() => toggleTodo(id)} />
      ) : (
        <Icon name={`leaf${randomLeaf()}`} onClick={() => toggleTodo(id)} />
      )}
      {completed ? (
        <div
          className="w-full ml-4 font-bold text-gray-600 dark:text-gray-400 text-base"
          style={{ textDecoration: "line-through #43CD80 0.2rem" }}
        >
          {content}
        </div>
      ) : (
        <div className="w-full ml-4 font-bold text-gray-600 dark:text-gray-200 text-base">
          {content}
        </div>
      )}
      <img
        src={deleteImg}
        className="w-5 block mr-2 cursor-pointer"
        onClick={() => removeTodo(id)}
      />
      {/* <button
				onClick={() => removeTodo(id)}
				className="text-gray-50 hover:text-red-600 font-semibold absolute right-0.5 block"
			>
				删除
			</button> */}
    </div>
  );
};

export default TdItem;
