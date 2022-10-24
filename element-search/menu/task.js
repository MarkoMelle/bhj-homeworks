const menuLink = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));
let menuIsClosed = true;

function menuClose() {
   menuSub.forEach(
      (subMenu) => {
         subMenu.classList.remove('menu_active');
         menuIsClosed = true;
      });
};

function menuOpen(link) {
   link.parentElement.querySelector('.menu_sub').classList.add('menu_active');
   menuIsClosed = false;
};

menuLink.forEach(link => {
   link.onclick = () => {
      if (link.parentElement.querySelector('.menu_active') && !menuIsClosed) {
         menuClose();
         return false;
      };

      if (!menuIsClosed && link.parentElement.querySelector('.menu_sub')) {
         menuClose();
         menuOpen(link);
         return false;
      };

      if (link.parentElement.querySelector('.menu_sub')) {
         menuOpen(link);
         return false;
      };
   };
});

