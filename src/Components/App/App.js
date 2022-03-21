import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import TodoForm from '../TodoForm/TodoForm';
import TodoInfo from '../TodoInfo/TodoInfo';
import TodoList from '../TodoList/TodoList';
import TodoFilter from '../TodoFilter/TodoFilter';

import './App.css';


function App() {

    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) || []
    )
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTodo = (input) => {
        if(input) {
            const newTodo = {
                id: v4(),
                task: input,
                complete: false,
            }
            setTodos([...todos, newTodo]);
        }
    }

    const deletTodo = (id) => {
        const newTodo = [...todos].filter((todo) => todo.id !== id);
        setTodos(newTodo);
    }

    const hendlerTodo = (id) => {
        setTodos([...todos.map((todo) => 
            todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
        )])
    }

    const filterPost = (todos, filter) => {
        switch (filter) {
            case 'completed':
                return todos.filter(todo => todo.complete);
            case 'notComplreted':
                return todos.filter(todo => !todo.complete);
            default:
                return todos;
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const allTodos = todos.length;
    const notCompTodos = todos.filter(todo => !todo.complete).length;
    const visibleTodos = filterPost(todos, filter);

    return (
        <div className='app'>
            <TodoInfo 
                allTodos={allTodos}
                notCompTodos={notCompTodos}/>
            <TodoForm onAdd={addTodo}/>
            <TodoList 
                todos={visibleTodos}
                onDelet={deletTodo}
                hendlerTodo={hendlerTodo}/>
            <TodoFilter 
                filter={filter}
                onFilterSelect={onFilterSelect}/>
        </div>
    );
}

export default App;
