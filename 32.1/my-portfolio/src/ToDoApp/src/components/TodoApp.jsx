import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO, CLEAR_COMPLETED,
} from '../store/sagas/todoSaga.js';

function TodoApp() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const loading = useSelector((state) => state.todos.loading);
    const error = useSelector((state) => state.todos.error);

    useEffect(() => {
        dispatch({type: FETCH_TODOS});
    }, [dispatch]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch({type: ADD_TODO, payload: inputValue.trim()});
            setInputValue('');
        }
    };

    const handleToggleTodo = (todo) => {
        dispatch({
            type: UPDATE_TODO, payload: {
                id: todo._id, data: {
                    title: todo.title, completed: !todo.completed,
                },
            },
        });
    };

    const handleEditTodo = (todo) => {
        const newTitle = prompt('Редактировать задачу:', todo.title);
        if (newTitle === null || newTitle.trim() === '') {
            return;
        }

        dispatch({
            type: UPDATE_TODO, payload: {
                id: todo._id, data: {
                    title: newTitle.trim(), completed: todo.completed,
                },
            },
        });
    };

    const handleDeleteTodo = (id) => {
        dispatch({type: DELETE_TODO, payload: id});
    };

    const handleClearCompleted = () => {
        dispatch({type: CLEAR_COMPLETED});
    };


    return (<div className="todo-container">
        <h1>TODO</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleAddTodo} className="todo-form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Добавить новую задачу..."
                disabled={loading}
                className="todo-input"
            />
            <button type="submit" disabled={loading} className="btn-add">
                {loading ? 'Загрузка...' : 'Добавить'}
            </button>
        </form>

        {todos.length === 0 ? (<div className="empty-state">
            <p>Нет задач. Добавьте новую задачу!</p>
        </div>) : (<ul className="todo-list">
            {todos.map((todo) => (<li
                key={todo._id}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo)}
                    className="todo-checkbox"
                />
                <span className="todo-text">{todo.title}</span>
                <div className="todo-actions">
                    <button
                        onClick={() => handleEditTodo(todo)}
                        className="btn-edit"
                        disabled={loading}
                    >
                        Редактировать
                    </button>
                    <button
                        onClick={() => handleDeleteTodo(todo._id)}
                        className="btn-delete"
                        disabled={loading}
                    >
                        Удалить
                    </button>
                </div>

            </li>))}
        </ul>)}
        <div className="stats">
            <span className="stat">Всего: {todos.length}</span>
        </div>
        <button onClick={handleClearCompleted} disabled={loading} className="btn-clear">
            Очистить завершенные
        </button>
    </div>);
}

export default TodoApp;