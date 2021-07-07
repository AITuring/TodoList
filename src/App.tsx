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
        <div className="bg-bing w-screen h-screen flex justify-center">
            <div className="w-1/2 bg-white p-4 my-4 mx-20 rounded-lg bg-opacity-90">
              <div className="left-content text-2xl font-bold">Vision</div>
              <TodoList />
            </div>
        </div>
    );
}

export default App;
