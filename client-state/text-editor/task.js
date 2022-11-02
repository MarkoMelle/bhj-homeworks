const editor = document.getElementById('editor');
const resetBtn = document.querySelector('button');
const form = document.querySelector('form')

function restoreData(key) {
   try {
      return JSON.parse(localStorage.getItem(key));
   } catch (error) {
      return
   }
}

if (restoreData('editor')) {
   editor.value = restoreData('editor');
}


editor.addEventListener('change', () => localStorage.setItem('editor', JSON.stringify(editor.value)));

form.addEventListener('reset', () => {
   localStorage.removeItem('editor');
})

