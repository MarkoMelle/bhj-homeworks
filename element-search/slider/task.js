const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let itemsArr = Array.from(document.querySelectorAll('.slider__item'));
const dot = Array.from(document.querySelectorAll('.slider__dot'));

let getcurrentNumber = function () {
   return itemsArr.findIndex(element => element.className.includes('slider__item_active'));
}
let currentNumber = getcurrentNumber();

const prevNumber = () => {
   if (currentNumber <= 0) {
      return (itemsArr.length - 1);
   }
   return currentNumber - 1;
}

const nextNumber = () => {
   if (currentNumber >= (itemsArr.length - 1)) {
      return 0;
   }
   return currentNumber + 1;
}

function slideIt(ArrayOfElements, className, nextNumber, current = currentNumber) {
   ArrayOfElements[current].classList.remove(className);
   ArrayOfElements[nextNumber].classList.add(className);
};

function counterReload() {
   currentNumber = getcurrentNumber()
   currentDot = getcurrentDot()
};

prev.onclick = function () {
   slideIt(itemsArr, 'slider__item_active', prevNumber());
   slideIt(dot, 'slider__dot_active', prevNumber());
   counterReload();
};

next.onclick = function () {
   slideIt(itemsArr, 'slider__item_active', nextNumber());
   slideIt(dot, 'slider__dot_active', nextNumber());
   counterReload();
};

// Точки начало

dot[currentNumber].classList.add('slider__dot_active');

let getcurrentDot = function () {
   return dot.findIndex(element => element.className.includes('slider__dot_active'));
};

let currentDot = getcurrentDot();

for (let i = 0; i < dot.length; i++) {
   dot[i].onclick = () => {
      slideIt(dot, 'slider__dot_active', i, currentDot);
      slideIt(itemsArr, 'slider__item_active', i);
      counterReload();
   }
};