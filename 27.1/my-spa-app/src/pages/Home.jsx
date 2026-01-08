import {useState} from 'react';

function Home({theme}) {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    function addTodo() {
        if (input === '') {
            return;
        }
        const newTodo = {
            id: Math.random(),
            text: input,
        };
        setList([...list, newTodo]);
        setInput('');
    }

    function deleteTodo(id) {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    return (
        <div className="todo-block">
            <h1>TO DO</h1>
            <div className='input-class'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a task!"
                />
                <button className="button-dark" onClick={addTodo}>Add</button>
            </div>


            <ul>
                {list.map((todo) => (
                    <li className='todo-point' key={todo.id}>
                        {todo.text}
                        <button className="button-dark" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
