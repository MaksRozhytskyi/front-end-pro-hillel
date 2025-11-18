const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    renderTodos(todos);
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos(todos) {
    todosWrapper.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        if (todo.checked) {
            todoItem.classList.add('todo-item--checked');
        }
        todoItem.innerHTML = `
      <input type="checkbox" ${todo.checked ? 'checked' : ''}>
      <span class="todo-item__description">${todo.description}</span>
      <button class="todo-item__delete">Видалити</button>
    `;

        const checkbox = todoItem.querySelector('input[type=checkbox]');
        checkbox.addEventListener('change', () => {
            todos[index].checked = checkbox.checked;
            saveTodos(todos);
            renderTodos(todos);
        });

        const deleteBtn = todoItem.querySelector('.todo-item__delete');
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos(todos);
            renderTodos(todos);
        });

        todosWrapper.appendChild(todoItem);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodo = {
        description: input.value,
        checked: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos);
    form.reset();
});

loadTodos();
