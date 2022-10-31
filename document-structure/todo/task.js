const addBtn = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
let listDatain = () => Array.from(document.querySelectorAll('.task__title'), e => e.textContent.trim());
const listDataout = JSON.parse(localStorage.getItem("todoList"));

function saveList() {
   localStorage.setItem('todoList', JSON.stringify(listDatain()))
}

function add() {
   input.value.trim() !== "" ? list.appendChild(todoNew(input.value.trim())) : false;
   saveList();
   input.value = '';
}

function todoNew(e) {
   let todo = document.createElement('div');
   todo.classList.add('task');
   todo.innerHTML = `<div class="task__title">
   ${e}
</div>
<a href="#" class="task__remove">&times;</a>`;
   return todo;
}

addBtn.onclick = function () {
   add();
   return false;
}

list.addEventListener('click', function (e) {
   e.target.classList.contains('task__remove') ? e.target.parentElement.remove() : false;
   saveList();
})

function parseStorage() {
   for (let e of listDataout) {
      list.appendChild(todoNew(e));
   }
}

window.localStorage.todoList !== undefined ? parseStorage() : false;

