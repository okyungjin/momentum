const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');
todoForm.addEventListener('submit', handleTodoSubmit);

const TODOS_KEY = 'todos';
let todos = getTodosInLocalStorage();
todos.forEach(paintTodo);

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = createTodoByLabel(todoInput.value);
  paintTodo(newTodo);
  addTodo(newTodo);
  clearTodoInput();
}

function createTodoByLabel(label) {
  return { id: Date.now(), label };
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;

  const span = document.createElement('span');
  span.innerText = newTodo.label;

  console.log(span.innerText)

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
  const todoIdToDelete = parseInt(li.id);
  li.remove();
  todos = todos.filter(todo => todo.id !== todoIdToDelete);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function addTodo(newTodo) {
  todos.push(newTodo);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function getTodosInLocalStorage() {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  return savedTodos ? JSON.parse(savedTodos) : [];
}