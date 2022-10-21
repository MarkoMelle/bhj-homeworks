const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let itemsArr = Array.from(document.querySelectorAll('.slider__item'));

let getcurrentNumber = function () {
   return itemsArr.findIndex(element => element.className.includes('slider__item_active'));
}
let currentNumber = getcurrentNumber();

const prevNumber = () => {
   if (currentNumber <= 0) {
      return (itemsArr.length - 1);
   }
   return (currentNumber - 1);
}

const nextNumber = () => {
   if (currentNumber >= (itemsArr.length - 1)) {
      return 0;
   }
   return (currentNumber + 1);
}

prev.onclick = function () {
   itemsArr[currentNumber].classList.remove('slider__item_active');
   itemsArr[prevNumber()].classList.add('slider__item_active');
   dot[currentNumber].classList.remove('slider__dot_active');
   dot[prevNumber()].classList.add('slider__dot_active');
   currentNumber = getcurrentNumber();
   currentDot = getcurrentDot()
}

next.onclick = function () {
   itemsArr[currentNumber].classList.remove('slider__item_active');
   itemsArr[nextNumber()].classList.add('slider__item_active');
   dot[currentNumber].classList.remove('slider__dot_active');
   dot[nextNumber()].classList.add('slider__dot_active');
   currentNumber = getcurrentNumber();
   currentDot = getcurrentDot()
}

// Точки начало

const dot = Array.from(document.querySelectorAll('.slider__dot'));

dot[currentNumber].classList.add('slider__dot_active');

let getcurrentDot = function () {
   return dot.findIndex(element => element.className.includes('slider__dot_active'));
}

let currentDot = getcurrentDot();

for (let i = 0; i < dot.length; i++) {
   dot[i].onclick = () => {
      dot[currentDot].classList.remove('slider__dot_active');
      dot[i].classList.add('slider__dot_active');
      itemsArr[getcurrentNumber()].classList.remove('slider__item_active');
      itemsArr[i].classList.add('slider__item_active');
      currentDot = getcurrentDot();
      currentNumber = getcurrentNumber();
   }
}