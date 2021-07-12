import React, { FC, ReactElement } from "react";
import { ITodo } from "../typings";
import deleteImg from "assets/delete.png";
import todoImg from "assets/todo.png";
import doneImg from "assets/done.png";
import doneImg2 from "assets/done2.png";

interface IProps {
	todo: ITodo;
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
}

const TdItem: FC<IProps> = ({
	todo,
	toggleTodo,
	removeTodo
}): ReactElement => {

	const { id, content, completed } = todo;

	return (
		<div
			className="h-13 leading-13 my-4 rounded-sm p-3 flex items-center hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-2xl cursor-pointer"
			onClick={() => toggleTodo(id)}
		>
			{
				completed ?
					<img
						src={doneImg}
						className="w-7 block mr-2 cursor-pointer"
						onClick={() => toggleTodo(id)}
					/>
					:
					<img
						src={todoImg}
						className="w-7 block mr-2 cursor-pointer"
						onClick={() => toggleTodo(id)}
					/>
			}
			{
				completed ?
					<div
						className="w-full ml-4 font-bold text-gray-600 dark:text-gray-400"
						style={{ textDecoration: 'line-through #43CD80 0.2rem'}}
					>
						{content}
					</div>
					:
					<div
						className="w-full ml-4 font-bold text-gray-600 dark:text-gray-200"
					>
						{content}
					</div>
			}
			<img
				src={deleteImg}
				className="w-7 block mr-2 cursor-pointer"
				onClick={() => removeTodo(id)}
			/>
			{/* <button
				onClick={() => removeTodo(id)}
				className="text-gray-50 hover:text-red-600 font-semibold absolute right-0.5 block"
			>
				删除
			</button> */}
		</div>
	)
}

export default TdItem;
