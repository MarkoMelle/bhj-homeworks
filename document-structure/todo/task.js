const addBtn = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');
const input = document.getElementById('task__input');

function saveList() {
   localStorage.setItem('todoList', `${list.innerHTML}`)
}

function add() {
   todoNew();
   list.appendChild(todoNew())
   saveList();
}

function todoNew() {
   let todo = document.createElement('div');
   todo.classList.add('task');
   todo.innerHTML = `<div class="task__title">
   ${input.value}
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

list.innerHTML = window.localStorage.todoList !== undefined ? window.localStorage.todoList : '';