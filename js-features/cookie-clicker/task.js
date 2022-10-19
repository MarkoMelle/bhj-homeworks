const clickCounter = document.getElementById('clicker__counter');
const btn = document.getElementById('cookie');
const speedField = document.getElementById('clicker__speed');

let firstClick = true;
let counter = 0;
let currentTime;
let lastTime;

btn.onclick = function () {
   if (firstClick) {
      lastTime = new Date();
      console.log(counter);
      counter += 1;
      clickCounter.textContent = counter;
      firstClick = false
      return;
   };
   currentTime = new Date();
   let resultTime = currentTime - lastTime;
   speedField.textContent = 1 / (resultTime * 0.001);
   speedField.textContent = speedField.textContent.substring(0, 4);
   lastTime = new Date();
   console.log(counter);
   counter += 1;
   clickCounter.textContent = counter;
}
