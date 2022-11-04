const form = document.querySelector('#signin__form');
const signin = document.querySelector('#signin');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');

function getWelcome() {
   welcome.classList.add('welcome_active');
   signin.classList.remove('signin_active');
}

if (localStorage.getItem('user_id')) {
   try {
      userId.textContent = JSON.parse(localStorage.getItem('user_id'));
      getWelcome();
   } catch (error) {
      console.log(error)
   };
};

form.addEventListener('submit', (e) => {
   e.preventDefault();
   let formData = new FormData(form);
   formData
   const xhr = new XMLHttpRequest();
   xhr.responseType = 'json';
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
   xhr.send(formData);

   xhr.addEventListener('load', () => {
      response = xhr.response;
      checkData();
   })


   function checkData() {
      if (xhr.response.success) {
         userId.textContent = xhr.response["user_id"];
         localStorage.setItem('user_id', userId.textContent);
         getWelcome();
         form.reset();
      } else {
         alert('Неверный логин/пароль');
         form.reset();
      }
   }
})

