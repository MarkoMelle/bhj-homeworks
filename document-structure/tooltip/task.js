const link = Array.from(document.querySelectorAll('.has-tooltip'));
let firstTime = true;

function removeTooltip() {
   link.forEach(e => {
      if (firstTime) {
         e.setAttribute('onclick', 'return false;');
         e.insertAdjacentHTML('afterEnd', `<div class="tooltip" style="position: absolute; left:${e.getBoundingClientRect().x}px; top:${e.getBoundingClientRect().y + window.pageYOffset + 20}px">${e.title}</div>`);
      }
      e.nextElementSibling.classList.remove('tooltip_active')
   })
   firstTime = false;
}

removeTooltip();

link.forEach(function (e) {
   e.addEventListener('click', (e) => {
      removeTooltip();
      e.target.nextElementSibling.classList.add('tooltip_active');
   })
})