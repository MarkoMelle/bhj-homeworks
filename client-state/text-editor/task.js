const editor = document.getElementById('editor');
const resetBtn = document.querySelector('button');
const form = document.querySelector('form')

editor.value = localStorage.getItem(key)

editor.addEventListener('change', () => localStorage.setItem('editor', editor.value));

form.addEventListener('reset', () => {
   localStorage.removeItem('editor');
})

