const popup = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

document.cookie.includes('isFirstTime') ? false : popup.classList.add('modal_active')

closeBtn.addEventListener('click', () => {
   popup.classList.remove('modal_active');
   isFirstTime = false;
   document.cookie = "isFirstTime=False"
})