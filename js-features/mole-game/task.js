const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const reset = document.getElementById('reset-game');
const hole = Array.from(document.querySelectorAll('.hole'));

// const hole = function (index) {
//    return document.getElementById(`hole${index}`)
// }; 

function endGame(alertText) {
   alert(alertText);
   lost.textContent = dead.textContent = 0;
}

for (let i = 0; i < 9; i++) {
   hole[i].onclick = function () {
      if (hole[i].className.includes('hole_has-mole')) {
         ++dead.textContent;
         if (+dead.textContent === 10) {
            endGame('Вы выйграли')
         };
      } else {
         ++lost.textContent;
         if (+lost.textContent === 5) {
            endGame('Вы проиграли')
         };
      };
   };
};

