const block1 = document.querySelector('#block');
const block2 = block1.querySelector('#too');
const a = block1.querySelector('a');

console.log(block2.getBoundingClientRect()); // width, height, top, left, right, bottom

const price = 10;

// Создаем элементы
// const subtitle = document.createElement('h2');
// subtitle.className = 'subtitle';
// subtitle.textContent = 'Price:';

// const priceParagraph = document.createElement('p');
// priceParagraph.className = 'price';
// priceParagraph.textContent = price;

// // Вставляем элементы
// block2.insertAdjacentElement('beforeend', subtitle);
// block2.insertAdjacentElement('beforeend', priceParagraph);

// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.

console.log(a.closest('a')); // Находит ближайший родительский элемент с тегом 'a'

console.log(block2.closest('#block')); // Находит ближайший родительский элемент с тегом 'block'