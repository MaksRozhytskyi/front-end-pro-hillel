const $form = $('.js--form');
const $input = $('.js--form__input');
const $todosWrapper = $('.js--todos-wrapper');

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    renderTodos(todos);
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos(todos) {
    $todosWrapper.html('');

    todos.forEach((todo, index) => {
        const $todoItem = $('<li>').addClass('todo-item');

        if (todo.checked) {
            $todoItem.addClass('todo-item--checked');
        }

        $todoItem.html(`
            <input type="checkbox" ${todo.checked ? 'checked' : ''}>
            <span class="todo-item__description">${todo.description}</span>
            <button class="todo-item__delete">Видалити</button>
        `);

        const $checkbox = $todoItem.find('input[type=checkbox]');
        $checkbox.on('change', () => {
            todos[index].checked = $checkbox.is(':checked');
            saveTodos(todos);
            renderTodos(todos);
        });

        const $description = $todoItem.find('.todo-item__description');
        $description.on('click', () => {
            $('#todoModalBody').text(todo.description);
            $('#todoModal').modal('show');
        });

        const $deleteBtn = $todoItem.find('.todo-item__delete');
        $deleteBtn.on('click', () => {
            todos.splice(index, 1);
            saveTodos(todos);
            renderTodos(todos);
        });

        $todosWrapper.append($todoItem);
    });
}


$form.on('submit', (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodo = {
        description: $input.val(),
        checked: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos);
    $form[0].reset();
});

loadTodos();