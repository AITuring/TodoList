import React, { FC, ReactElement } from 'react';
import './index.css';
import TodoList from './components/TodoList';
import Menu from './components/Menu';
import todo from './assets/todo.png';

interface IProps {

}

const App: FC<IProps> = (): ReactElement => {
    fetch('/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }).then(response => {
        console.log(response)
    })
    return (
        <div className="bg-sea w-screen h-screen flex items-center">
            <div className="w-1/2 p-4 my-4 mx-20 shadow-2xl">
                {/* <div className="left-content text-3xl font-bold">Vision</div> */}
                <Menu />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
