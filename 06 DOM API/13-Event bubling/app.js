document.querySelector('button').addEventListener('click', handleClick);
document.querySelector('section').addEventListener('click', handleClick);
document.querySelector('div').addEventListener('click', handleClick);

function handleClick(event) {
  event.stopPropagation()
  console.log(event);
  // console.log(event.target);
  console.log(event.target.tagName);
  console.log(event.currentTarget);
}