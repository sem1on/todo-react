import React from "react";

import './Todo.css';

const Todo = (props) => {
   
    const { onDelet, hendlerTodo, task, complete} = props;

    let classNames = 'item-task';

    if(complete){
        classNames = 'compleate'
    }

    return (
        <>
            <li className="list-item">
                <div className="list-items">
                    <div className={classNames} onClick={hendlerTodo}>
                        o
                    </div>
                    <div className={classNames}>
                        {task}
                    </div>
                </div>
                <div className="iten-close" onClick={onDelet}>
                    X
                </div>
            </li>
            <div class="line"></div>
        </>
        
        
    )
}

export default Todo;