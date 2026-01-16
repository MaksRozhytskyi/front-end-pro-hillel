const API_URL = 'http://localhost:5000/api/todos';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

async function fetchTodos() {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderTodos(data);
}

function renderTodos(todos) {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.className = 'todo-checkbox';
        checkbox.addEventListener('change', () => toggleTodo(todo));

        const span = document.createElement('span');
        span.className = 'todo-title';
        if (todo.completed) {
            span.classList.add('completed');
        }
        span.textContent = todo.title;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'btn-edit';
        editBtn.addEventListener('click', () => editTodo(todo));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn-delete';
        deleteBtn.addEventListener('click', () => deleteTodo(todo._id));

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'todo-buttons';
        buttonsContainer.appendChild(editBtn);
        buttonsContainer.appendChild(deleteBtn);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(buttonsContainer);
        todoList.appendChild(li);
    });
}

async function addTodo(title) {
    await fetch(API_URL, {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({title}),
    });
    await fetchTodos();
}

async function toggleTodo(todo) {
    await fetch(`${API_URL}/${todo._id}`, {
        method: 'PUT', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            title: todo.title, completed: !todo.completed,
        }),
    });
    await fetchTodos();
}

async function editTodo(todo) {
    const newTitle = prompt('Отредактируй задачу:', todo.title);

    if (newTitle === null || newTitle.trim() === '') {
        return;
    }

    await fetch(`${API_URL}/${todo._id}`, {
        method: 'PUT', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            title: newTitle.trim(), completed: todo.completed,
        }),
    });
    await fetchTodos();
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    await fetchTodos();
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = todoInput.value.trim();
    if (!title) return;
    addTodo(title);
    todoInput.value = '';
});

fetchTodos();
