const menuLink = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));

menuLink.forEach(link => {
   link.onclick = () => {
      menuSub.forEach(
         subMenu => {
            subMenu.classList.remove('menu_active')
         });
      link.parentElement.querySelector('.menu_sub').classList.add('menu_active')
      return false;
   }
})

