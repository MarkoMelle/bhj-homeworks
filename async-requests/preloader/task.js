let items = document.getElementById('items')
let loader = document.getElementById('loader');
let response = {};


let xhr = new XMLHttpRequest();
xhr.open("POST", "https://netology-slow-rest.herokuapp.com")
xhr.send();

response = window.localStorage.getItem("Valute") !== '' ? JSON.parse(window.localStorage.getItem("Valute")) : {};

if (response !== null && Object.keys(response).length !== 0) {
   setNewItem()
};

xhr.addEventListener("readystatechange", (e) => {
   if (xhr.readyState === xhr.DONE) {
      window.localStorage.setItem('Valute', xhr.response);
      response = JSON.parse(xhr.response);
      console.log('Ответ получин');
      setNewItem();
   };
})

function setNewItem() {
   for (let i in response.response.Valute) {
      let item = document.createElement('div')
      item.classList.add('item');
      item.innerHTML = `<div class="item__code">
   ${response.response.Valute[i].CharCode}
</div>
<div class="item__value">
${response.response.Valute[i].Value}
</div>
<div class="item__currency">
   руб.
</div>`;
      items.appendChild(item);
   }
   items.hidden = false;
   loader.classList.remove('loader_active');
}
