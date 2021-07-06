import React, { FC, ReactElement } from 'react';
import './index.css';
import TodoList from './components/TodoList';

interface IProps {

}

const App: FC<IProps>= (): ReactElement=> {
    return (
        <div className="bg-gray-700 w-screen h-screen flex justify-center">
            <div className="left-content"></div>
            <TodoList />
        </div>
    );
}

export default App;