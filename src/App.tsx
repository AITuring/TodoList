import React, { FC, ReactElement } from 'react';
import './index.css';
import TodoList from './components/TodoList';
import Menu from './components/Menu';

interface IProps {

}

const App: FC<IProps> = (): ReactElement => {
    return (
        <div className="bg-sea w-screen h-screen flex items-center">
            <Menu />
            <TodoList />
        </div>
    );
}

export default App;
