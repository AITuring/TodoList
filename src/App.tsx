import React, { FC, ReactElement } from 'react';
import './index.css';
import TodoList from './components/TodoList';
import todo from './assets/todo.png';

interface IProps {

}

const App: FC<IProps>= (): ReactElement=> {
    return (
        <div className="bg-white w-screen h-screen flex justify-center relative">
            <div className="left-content"></div>
            <TodoList />
            <img src={todo} className="w-1/2 absolute -bottom-0 -right-0" />
        </div>
    );
}

export default App;