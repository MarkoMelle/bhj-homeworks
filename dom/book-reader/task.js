const book = document.getElementById('book');
const fsPanel = document.querySelector('.book__control_font-size')
const colorPanel = document.querySelector('.book__control_color');
const bgPanel = document.querySelector('.book__control_background');
let fsActive;
let colActive;
let bgActive;


function getActive() {
   fsActive = fsPanel.querySelector('.font-size_active');
   colActive = colorPanel.querySelector('.color_active');
   bgActive = bgPanel.querySelector('.color_active');

};

Array.from(book.querySelectorAll('a')).forEach(a =>
   a.setAttribute('onclick', 'return false;')
);

book.addEventListener('click', function (Event) {
   getActive();

   if (Event.target.tagName != 'A') {
      return;
   };

   if (Event.target.dataset.size) {
      let size = Event.target.dataset.size;
      fsActive.classList.remove('font-size_active')
      book.classList.remove(`book_fs-${fsActive.dataset.size}`)
      book.classList.add(`book_fs-${size}`)
      Event.target.classList.add('font-size_active')
   };

   if (Event.target.dataset.textColor) {
      let textColor = Event.target.dataset.textColor;
      colActive.classList.remove('color_active')
      book.classList.remove(`book_color-${colActive.dataset.textColor}`)
      book.classList.add(`book_color-${textColor}`)
      Event.target.classList.add('color_active')
   };

   if (Event.target.dataset.bgColor) {
      let bground = Event.target.dataset.bgColor;
      bgActive.classList.remove('color_active');
      book.classList.remove(`book_bg-${bgActive.dataset.bgColor}`);
      book.classList.add(`book_bg-${bground}`);
      Event.target.classList.add('color_active');
   };
})
