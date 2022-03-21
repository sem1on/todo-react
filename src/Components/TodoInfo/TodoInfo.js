import './TodoInfo.css';

const TodoInfo = ({allTodos, notCompTodos}) => {
  
    return (
        <div className="app-info">
            <h1 className='header'>Список задач</h1>
            <div className='header-info'>
                <p className='all-todos'>Всего задач: {allTodos}</p>
                <p className='not-todos'>Осталось выполнить: {notCompTodos}</p>
            </div>
            
        </div>
    )
}

export default TodoInfo;