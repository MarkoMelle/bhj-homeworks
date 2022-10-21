const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const reset = document.getElementById('reset-game');

const hole = function (index) {
   return document.getElementById(`hole${index}`)
};

for (let i = 1; i < 10; i++) {
   hole(i).onclick = function () {
      if (hole(i).className.includes('hole_has-mole')) {
         ++dead.textContent;
         if (+dead.textContent === 10) {
            alert('Вы выиграли');
            lost.textContent = dead.textContent = 0;
         }
      } else {
         ++lost.textContent;
         if (+lost.textContent === 5) {
            alert('Вы проиграли');
            lost.textContent = dead.textContent = 0;
         };
      };
   };
};

