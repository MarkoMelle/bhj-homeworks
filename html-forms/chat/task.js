const chat = document.querySelector('.chat-widget');
const chatContainer = document.querySelector('.chat-widget__messages-container')
const input = document.getElementById('chat-widget__input')
const messages = document.querySelector('.chat-widget__messages');
const botMessages = [
   "Здесь могла быть Ваша реклама",
   "Lorem ipsum",
   "Добрый день!",
   "Спасибо что написали нам.",
   "Да",
   "Вы еще здесь?!"
]
let data = () => {
   return new Date().toLocaleString('ru-RU', {
      hour: "2-digit",
      minute: "2-digit",
   });
}

let timerId;

chat.addEventListener('click', () => {
   chat.classList.add('chat-widget_active');
})

setInterval(function () {
   chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
      behavior: 'smooth'
   });
}, 1000);


window.addEventListener('keydown', function (e) {
   if (input.value !== '' && e.code === 'Enter') {
      this.clearTimeout(timerId);
      timerId = this.setTimeout(() => {
         messages.innerHTML += `
                     <div class="message">
                         <div class="message__time">${data()}</div>
                         <div class="message__text"><img src="https://www.meme-arsenal.com/memes/624056c77b83d79819c0e44c267de14c.jpg"alt=""></div>
                     </div>
   `
      }, 30000)
      function getRandomInt() {
         min = Math.ceil(0);
         max = Math.floor(botMessages.length);
         return Math.floor(Math.random() * botMessages.length);
      }
      messages.innerHTML += `
                        <div class="message message_client">
                            <div class="message__time">${data()}</div>
                            <div class="message__text">${input.value}</div>
                        </div>
                        <div class="message">
                            <div class="message__time">${data()}</div>
                            <div class="message__text">${botMessages[getRandomInt()]}</div>
                        </div>
      `
   }

})