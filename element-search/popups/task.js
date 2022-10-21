const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = Array.from(document.querySelectorAll('.modal__close_times'));
const showSuccess = document.querySelector('.show-success');
modalMain.classList.add('modal_active');

modalClose.forEach(close => {
   close.onclick = function () {
      modalMain.classList.remove('modal_active');
      modalSuccess.classList.remove('modal_active');
   }
});

showSuccess.onclick = function () {
   modalMain.classList.remove('modal_active');
   modalSuccess.classList.add('modal_active');
};
