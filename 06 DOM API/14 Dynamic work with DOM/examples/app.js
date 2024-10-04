lst = document.getElementById('tasks');
document.querySelector('button')
  .addEventListener('click', handleClick);

function handleClick() {
  const newTask = this.previousElementSibling.value.trim();
  addNewTask(newTask);
  this.previousElementSibling.value = '';
}

function addNewTask(newTask) {
  if (newTask) {
    const li = document.createElement('li');
    li.innerText = newTask;
    li.className = 'task';
    li.addEventListener('click', removeTask);

    lst.append(li);
  } else {
    alert('Task is empty');
  }
}

function removeTask(task) {
  this.remove();
}
