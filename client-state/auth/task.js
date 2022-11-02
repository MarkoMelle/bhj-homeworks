const form = document.querySelector('#signin__form');
const signin = document.querySelector('#signin');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');

if (localStorage.getItem('user_id')) {
   try {
      userId.textContent = JSON.parse(localStorage.getItem('user_id'));
      welcome.classList.add('welcome_active');
      signin.classList.remove('signin_active');
   } catch (error) { }
}

form.addEventListener('submit', (e) => {
   e.preventDefault();

   let formData = new FormData(form);
   formData
   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
   xhr.send(formData);

   xhr.addEventListener('readystatechange', (e) => {
      if (xhr.readyState === xhr.DONE) {
         response = xhr.response;
         checkData()
      }
   })


   function checkData() {
      if (JSON.parse(xhr.response).success) {
         welcome.classList.add('welcome_active');
         userId.textContent = JSON.parse(xhr.response)["user_id"];
         localStorage.setItem('user_id', userId.textContent);
         signin.classList.remove('signin_active');
      }
   }
})

