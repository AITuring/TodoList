import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Hello from './hello'
import TodoList from './components/TodoList'

ReactDOM.render(
  <React.StrictMode>
    <Hello name='TS' enthusiasmLevel={10} />
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
)
