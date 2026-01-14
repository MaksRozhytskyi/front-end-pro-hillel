import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo} from '../store/slices/todoSlice.js';

function TodoApp() {
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    };

    return (<div>
        <div className="to-do-window">
            <h1>TODO</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder=""
                />
                <button type="submit">Добавить</button>
            </form>
            <h2>TODOS</h2>
            <div className="li-text">
                <ul>
                    {todos.map((todo) => (<li key={todo.id}>{todo.text}</li>))}
                </ul>

            </div>

            <footer>
                <p>Всего: {todos.length}</p>
            </footer>
        </div>

    </div>);
}

export default TodoApp;
