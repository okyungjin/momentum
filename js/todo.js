const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', handleTodoSubmit);

function handleTodoSubmit(event) {
  event.preventDefault();
  createNewTodo(todoInput.value);
  clearTodoInput();
}

function createNewTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newTodo;
  todoList.appendChild(li);
}

function clearTodoInput() {
  todoInput.value = '';
}