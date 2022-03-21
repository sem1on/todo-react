import React from "react";

import Todo from "../Todo/Todo";

import './TodoList.css';

const TodoList = ({ todos, onDelet, hendlerTodo}) => {
    
    const elements = todos.map(todo => {
        const { id, ...todoProps } = todo;
        return (
        <Todo key={id}
                {...todoProps}  
                onDelet={() => onDelet(id)}
                hendlerTodo={() => hendlerTodo(id)}/>
        )
    })

    if(elements.length === 0) {
        return (
            <ul className="app-list">
                <div className="item-task">Тут пока-что пусто...</div>
            </ul>  
        )
    } return (
        <ul className="app-list">
            {elements}
        </ul> 
    ) 
}

export default TodoList;