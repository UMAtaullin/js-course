
// Globals (в реале у нас все будет лежать на сервере)
let todos = []
let users = []

// Attach Events (init app, когда вся страница отрисуется)
document.addEventListener('DOMContentLoaded', initApp)

// Event logic (отвечает за получение и запись данных)
function initApp() { 
  Promise.all([getAllTodos(), getAllUsers()])
    .then(values => [todos, users] = values)
  
  // Отправить в разметку

}

// Async logic
async function getAllTodos(){
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