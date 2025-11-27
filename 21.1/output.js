"use strict";

var $form = $('.js--form');
var $input = $('.js--form__input');
var $todosWrapper = $('.js--todos-wrapper');
function loadTodos() {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos);
}
function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
function renderTodos(todos) {
  $todosWrapper.html('');
  todos.forEach(function (todo, index) {
    var $todoItem = $('<li>').addClass('todo-item');
    if (todo.checked) {
      $todoItem.addClass('todo-item--checked');
    }
    $todoItem.html("\n            <input type=\"checkbox\" ".concat(todo.checked ? 'checked' : '', ">\n            <span class=\"todo-item__description\">").concat(todo.description, "</span>\n            <button class=\"todo-item__delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n        "));
    var $checkbox = $todoItem.find('input[type=checkbox]');
    $checkbox.on('change', function () {
      todos[index].checked = $checkbox.is(':checked');
      saveTodos(todos);
      renderTodos(todos);
    });
    var $description = $todoItem.find('.todo-item__description');
    $description.on('click', function () {
      $('#todoModalBody').text(todo.description);
      $('#todoModal').modal('show');
    });
    var $deleteBtn = $todoItem.find('.todo-item__delete');
    $deleteBtn.on('click', function () {
      todos.splice(index, 1);
      saveTodos(todos);
      renderTodos(todos);
    });
    $todosWrapper.append($todoItem);
  });
}
$form.on('submit', function (e) {
  e.preventDefault();
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var newTodo = {
    description: $input.val(),
    checked: false
  };
  todos.push(newTodo);
  saveTodos(todos);
  renderTodos(todos);
  $form[0].reset();
});
loadTodos();
