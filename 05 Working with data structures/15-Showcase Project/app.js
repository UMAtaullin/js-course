const products = [
  {
    id: 1,
    title: 'Lenovo Yoga',
    price: 3000,
  },
  {
    id: 2,
    title: 'Acer Aspire',
    price: 1800,
  },
  {
    id: 3,
    title: 'Dell Vostro',
    price: 3400
  },
]

let order = []

function addToBasket(id) {
  // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
  const checkOrder = order.find(el => el.id === id)
  if (checkOrder) {
    return alert('Товар уже добавлен в корзину')
  }
  // TODO: если товар еще не в корзине, добавить его из массива products
  const product = products.find(el => el.id === id)
  order = [...order, product]
  // Эти строчки не трогаем, они отвечают за перерисовку страницы
  renderCart()
  rerenderTotalPrice()
}

function removeFromBasket(id) {
  // TODO: описать логику удаления товара из корзины
  order = order.filter(el => el.id !== id)
  // Эти строчки не трогаем, они отвечают за перерисовку страницы
  renderCart()
  rerenderTotalPrice()
}


function rerenderTotalPrice() {
  // TODO: опишите функционал подсчета общей стоимости заказа
  const totalPrice = order.reduce((acc, el) => acc + el.price, 0)

  // Не меняйте эту строчку
  document.getElementById('total').innerText = totalPrice
}

// Этот метод остается без изменений
function renderCart() {
  const cart = document.getElementById('basket-items')

  cart.innerHTML = ''
  order.forEach(item => {
    // Для каждого товара мы создаем новый элемент списка (<li>), который будет содержать название товара (item.title)
    const el = document.createElement('li')
    el.innerText = item.title
    el.onclick = () => removeFromBasket(item.id)
    // После создания элемента списка и установки обработчика события, мы добавляем его в элемент cart, тем самым отображая товар в корзине
    cart.appendChild(el)
  })
}

