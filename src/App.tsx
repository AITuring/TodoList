import React, { FC, ReactElement } from 'react';
import './index.css';
import TodoList from './components/TodoList';
import todo from './assets/todo.png';

interface IProps {

}

const App: FC<IProps>= (): ReactElement=> {
    fetch('/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }).then(response =>{
    console.log(response)
    })
    return (
        <div className="bg-bing w-screen h-screen flex justify-center relative">
            <div className="left-content"></div>
            <TodoList />
            {/* <img src={todo} className="w-1/2 absolute -bottom-0 -right-0" /> */}
        </div>
    );
}

export default App;
