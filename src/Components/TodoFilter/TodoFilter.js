import './TodoFilter.css';

const TodoFilter = ({ filter, onFilterSelect}) => {

    const buttonsData = [
        {name: 'all', label: 'Все задания'},
        {name: 'completed', label: 'Готовые'},
        {name: 'notComplreted', label: 'Осталось сделать'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'active' : 'diss';
        return (
            <button type="button"
                    className={clazz}
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default TodoFilter;