const popup = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const cookie = document.cookie.split('; ');

if (cookie.find(e => e.includes('isFirstTime')) === undefined) {
   popup.classList.add('modal_active');
};

closeBtn.addEventListener('click', () => {
   popup.classList.remove('modal_active');
   isFirstTime = false;
   document.cookie = "isFirstTime=False"
})