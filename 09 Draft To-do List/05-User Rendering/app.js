
// Globals (в реале у нас все будет лежать на сервере)
const todoList = document.getElementById('todo-list')
const userSelect = document.getElementById('user-todo')
const form = document.querySelector('form')
let todos = []
let users = []

// Attach Events (init app, когда вся страница отрисуется)
document.addEventListener('DOMContentLoaded', initApp)
form.addEventListener('submit', handleSubmit)
// Basic logic
function getUserName(userId) {
  const user = users.find(user => user.id === userId)
  return user.name
}
 
function createUserOption(user) {
  const option = document.createElement('option')
  option.value = user.id
  option.innerText = user.name

  userSelect.append(option)
}

function printTodo({id, userId, title, complete}) {
  let li = document.createElement('li')
  li.className = 'todo-item'
  li.dataset.id = id
  li.innerHTML = `
  <span>${title} <i>by</i>
  <b>${getUserName(userId)}</b></span>`
   
  const status = document.createElement('input');
  status.type = 'checkbox';
  status.checked = complete;

  const close = document.createElement('span')
  close.innerHTML = '&times;';
  close.className = 'close'
  li.prepend(status)
  li.append(close)
  // todoList.appendChild(li)
  todoList.prepend(li)
}

// Event logic (управление событиями, отвечает за получение и запись данных)
function initApp() {
  Promise.all([getAllTodos(), getAllUsers()]).then(values => {
    [todos, users] = values
    todos.forEach(todo => printTodo(todo))
    users.forEach(user => createUserOption(user))
  })
}

function handleSubmit (event) { 
  event.preventDefault() // иначе отправка будет синхронной
  
  createTodo({
  userId: Number(form.user.value),
  title: form.todo.value,
  complete: false,
  })
}
// Async logic
async function getAllTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// отправка новых данных на сервер
async function createTodo(todo) {
  const response = await fetch('https://jsonplacehoder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  // в ответ должно прийти id
  const task = await response.json() 
  // отрисовка задачи на странице
  printTodo(task)
}