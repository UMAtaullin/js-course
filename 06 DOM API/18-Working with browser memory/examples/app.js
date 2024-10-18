tasks_list = document.getElementById('tasks')

document.querySelector('button').addEventListener('click', handleClick)
document.addEventListener('DOMContentLoaded', loadTasks)

function handleClick() {
  const newTask = this.previousElementSibling.value.trim();
  if (newTask) {
    addNewTask(newTask);
    saveNewTask(newTask)
  }
  this.previousElementSibling.value = '';
}

function addNewTask(newTask) {
  let li = document.createElement('li');
  li.innerText = newTask;
  li.addEventListener('click', removeTask)

  tasks_list.append(li)
}

function saveNewTask(newTask) {
  let tasks = JSON.parse(localStorage.getItem('todos')) || []

  localStorage.setItem('todos', JSON.stringify([...tasks, newTask]))
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('todos'))

  tasks.forEach(task => {
    addNewTask(task)
  })
}

function removeTask() {
  removeToStorage(this.innerText)
  this.removeEventListener('click', removeTask)
  this.remove()
}

function removeToStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('todos'))
  localStorage.setItem('todos', JSON.stringify(
    tasks.filter(el => el !== task)))
}