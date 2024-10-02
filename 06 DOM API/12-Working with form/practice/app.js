const registeredUsers = [
  ['admin', 'KoI18'],
  ['manager', 'SuperMe108'],
  ['editor', '12345'],
];

inputs = document.querySelectorAll('input')
form = document.querySelector('form')
const login = document.querySelector('[name=login]');
const password = document.querySelector('[name=password]');

inputs.forEach(
  el => el.addEventListener('keypress', handlePress));

function handlePress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    event.target.nextElementSibling.focus()
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!validate()) return;
})

function validate() {
  const user = registeredUsers.find(
    userEntry => userEntry[0] === login.value);
  if (login.value === '' || password.value === '') {
    console.log('All fields are required');
  }
  if (!user || user[1] !== password.value) {
    console.log('Incorrect login or password');
    return false;
  } else {
    console.log('Access granted');
    form.reset();
    return true;
  }
}
