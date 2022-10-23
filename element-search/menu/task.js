const menuLink = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));

menuLink.forEach(link => {
   link.onclick = () => {
      menuSub.forEach(
         (subMenu, index) => {
            if (link.parentElement.querySelector('.menu_active')) {
               subMenu[index].classList.remove('menu_active');
            }
            subMenu.classList.remove('menu_active')
         });
      if (link.parentElement.querySelector('.menu_sub')) {
         link.parentElement.querySelector('.menu_sub').classList.add('menu_active');
         return false;
      }
   }
})

