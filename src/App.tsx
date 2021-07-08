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
        <div className="bg-sea w-screen h-screen flex items-center justify-center">
            <div className="w-4/5 h-5/6 p-4 m-4 flex items-center">
                <Menu />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
