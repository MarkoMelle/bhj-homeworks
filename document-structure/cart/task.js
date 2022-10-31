const header = document.querySelector('.header');
const cart = document.querySelector('.cart');
const productsPanel = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');
let cartData = {};

function getCardId(e = HTMLBaseElement) {
   return e.parentElement.parentElement.parentElement.dataset.id
}

function chechCart() {
   if (cartProducts.innerHTML === '') {
      header.hidden = true;
      cart.hidden = true;
   } else {
      header.hidden = false;
      cart.hidden = false;
   }
}

function getNewCart(e) {
   let cart = document.createElement('div');
   cart.classList.add('cart__product');
   cart.dataset.id = getCardId(e);
   cart.innerHTML = `<img class="cart__product-image" src="${e.parentElement.parentElement.parentElement.querySelector('.product__image').src}">
   <div class="cart__product-count">${e.previousElementSibling.querySelector('.product__quantity-value').textContent}</div>
   <div class="cart__remove">&times;</div>`;
   cartProducts.appendChild(cart);
}


function clickEvent(e) {
   const cartId = `div[data-id="${getCardId(e.target)}"]`;

   if (e.target.classList.contains('product__quantity-control_dec')) {
      let nextCount = +e.target.nextElementSibling.textContent;
      nextCount = +nextCount <= 1 ? 1 : --nextCount;
      e.target.nextElementSibling.textContent = nextCount;
   } else if (e.target.classList.contains('product__quantity-control_inc')) {
      let prevCount = +e.target.previousElementSibling.textContent;
      prevCount = prevCount >= 99 ? 99 : ++prevCount;
      e.target.previousElementSibling.textContent = prevCount;
   };

   if (e.target.classList.contains('product__add')) {
      if (cartProducts.querySelector(cartId)) {
         document.querySelector(cartId).querySelector('.cart__product-count').textContent = +document.querySelector(cartId).querySelector('.cart__product-count').textContent + +e.target.previousElementSibling.querySelector('.product__quantity-value').textContent;
      } else { getNewCart(e.target); }
   };

   if (e.target.classList.contains('cart__remove')) {
      e.target.parentElement.remove()
      cartData = {};
   }
   
   saveCart();
   chechCart();
}


window.addEventListener('click', clickEvent)

// LocalStorage



function getcartData() {
   Array.from(document.querySelectorAll('.cart__product'), e => {
      if (cartData[e.dataset.id] === undefined) {
         cartData[e.dataset.id] = {
            id: e.dataset.id,
            src: e.querySelector('.cart__product-image').src
            , count: e.querySelector('.cart__product-count').textContent.trim()
         }
      } else {
         cartData[e.dataset.id].count = e.querySelector('.cart__product-count').textContent.trim();
      }
   })
}

function saveCart() {
   getcartData();
   localStorage.setItem('cart', JSON.stringify(cartData));
}

const cardDataout = JSON.parse(localStorage.getItem("cart"));

function parseStorage() {
   for (let i in cardDataout) {
      let cart = document.createElement('div');
      cart.classList.add('cart__product');
      cart.dataset.id = cardDataout[i].id;
      cart.innerHTML = `<img class="cart__product-image" src=${cardDataout[i].src}>
         <div class="cart__product-count">${cardDataout[i].count}</div>
         <div class="cart__remove">&times;</div>`;
      cartProducts.appendChild(cart);
   }
}

window.localStorage.cart !== undefined ? parseStorage() : false;
chechCart();