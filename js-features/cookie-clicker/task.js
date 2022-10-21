const clickCounter = document.getElementById('clicker__counter');
const btn = document.getElementById('cookie');
const speedField = document.getElementById('clicker__speed');
const cookie = document.getElementById('cookie');

let firstClick = true;
let currentTime;
let lastTime;

clickCounter.textContent = 0;

btn.onclick = function () {
   if (firstClick) {
      lastTime = new Date();
      ++clickCounter.textContent;
      firstClick = false
      cookie.width = clickCounter.textContent % 2 ? 250 : 200;
      return;
   };
   currentTime = new Date();
   const resultTime = currentTime - lastTime;
   speedField.textContent = 1 / (resultTime * 0.001);
   speedField.textContent = speedField.textContent.substring(0, 4);
   lastTime = new Date();
   ++clickCounter.textContent;
   cookie.width = clickCounter.textContent % 2 ? 250 : 200;
};
