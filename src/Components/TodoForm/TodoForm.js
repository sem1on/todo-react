import React, { useState } from "react";
import './TodoForm.css'

function TodoForm ({onAdd}) {

    const [input, setInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(input);
        setInput('');
    }

    const onValueChange = (e) => {
        setInput(e.currentTarget.value);
    }

    return (
        <div className="todo-form">
            <form className="add-form"
                  onSubmit={onSubmit}>
                <input type="text" 
                       maxlength="50"
                       placeholder="Введите задачу..."
                       value={input}
                       name='text'
                       className="todo-input"
                       onChange={onValueChange}/>
                <button type="submit" className="todo-button">Добавить</button>
            </form>
        </div>
        
    )
}

export default TodoForm;