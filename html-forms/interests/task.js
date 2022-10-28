const list = Array.from(document.querySelectorAll('.interests_active'));

list.forEach(e => {
   e.previousElementSibling.querySelector('input').addEventListener('click', () => {
      if (e.previousElementSibling.querySelector('input').checked) {
         Array.from(e.querySelectorAll('input')).forEach(e =>
            e.checked = true
         )
      } else {
         Array.from(e.querySelectorAll('input')).forEach(e =>
            e.checked = false
         )
      }
   })
})
