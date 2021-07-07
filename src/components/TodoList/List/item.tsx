import React, { FC, ReactElement } from "react";
import { ITodo } from "../typings";
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
		<div className="todo-item relative align-middle h-13 leading-13 my-4 hover:bg-green-50 rounded-lg p-4">
			<input
				type="checkbox"
        style={{ zoom:1.8 }}
				checked={ completed }
				onChange = { ()=> toggleTodo(id) }
			/>
			<span
				className="w-80 ml-4 font-bold text-gray-600"
				style={{textDecoration: completed ? 'line-through' : 'none'}}
			>
				{content}
			</span>
			<button
				onClick = {() => removeTodo(id)}
				className="text-gray-50 hover:text-red-600 font-semibold absolute right-0.5"
			>
				删除
			</button>
		</div>
	)
}

export default TdItem;
