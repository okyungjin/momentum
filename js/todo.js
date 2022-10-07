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
  span.innerText = newTodo;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

function clearTodoInput() {
  todoInput.value = '';
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}