import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from './Toggle';
import Timer from './Timer';
import TodoList from './TodoList';
import CardList from './CardList';
import Form from './Form';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toggle/>
    <Timer/>
    <TodoList/>
    <CardList/>
    <Form/>
    
  </React.StrictMode>
);

