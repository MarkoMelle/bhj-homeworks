const reveal = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', function () {
   reveal.forEach(e => {
      const { top, bottom } = e.getBoundingClientRect();
      if (top > window.innerHeight || bottom < 0) {
         e.classList.remove('reveal_active');
      } else {
         e.classList.add('reveal_active');
      }
   })
})
