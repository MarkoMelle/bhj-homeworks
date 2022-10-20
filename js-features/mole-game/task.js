const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const reset = document.getElementById('reset-game');

const hole = function (index) {
   return document.getElementById(`hole${index}`)
}

for (let i = 1; i < 10; i++) {
   hole(i).onclick = function () {
      if (hole(i).className.includes('hole_has-mole')) {
         console.log(dead);
         ++dead.textContent;
      } else {
         console.log(lost);
         ++lost.textContent;
      }
   }
}

