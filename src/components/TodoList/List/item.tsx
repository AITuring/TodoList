import React, { FC, ReactElement } from "react";
import { ITodo } from "../typings";
import deleteImg from "assets/delete.png";

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
					<div
						className="bg-gray-300 w-8 h-7 rounded-full border-2 border-green-500 flex justify-center items-center m-2"
						onClick={() => toggleTodo(id)}
					>
						<div
							className="w-3 h-3 bg-green-500 rounded-full"
							onClick={() => toggleTodo(id)}
						></div>
					</div>
					: <div
						// 这里的○不圆，有问题
						className="bg-gray-300 w-8 h-7 rounded-full m-2"
						onClick={() => toggleTodo(id)}
					>
					</div>
			}
			<div
				className="w-full ml-4 font-bold text-gray-600 dark:text-gray-200"
				style={{ textDecoration: completed ? 'line-through' : 'none' }}
			>
				{content}
			</div>
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
