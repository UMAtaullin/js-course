
// Globals (в реале у нас все будет лежать на сервере)
const todoList = document.getElementById('todo-list')
let todos = []
let users = []

// Attach Events (init app, когда вся страница отрисуется)
document.addEventListener('DOMContentLoaded', initApp)
// Basic logic
function getUserName(userId) {
  const user = users.find(user => user.id === userId)
  return user.name
}
function addNewTask({id, userId, title, complete}) {
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

// Event logic (отвечает за получение и запись данных)
function initApp() {
  Promise.all([getAllTodos(), getAllUsers()]).then(values => {
    [todos, users] = values
    todos.forEach(todo => addNewTask(todo))
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