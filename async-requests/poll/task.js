const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();
let buttons;

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener('readystatechange', (e) => {
   if (xhr.readyState === xhr.DONE) {
      getAnswer();
   }
})

function getAnswer() {
   let response = JSON.parse(xhr.response);
   pollTitle.textContent = response.data.title;
   for (let i in response.data.answers) {
      pollAnswers.dataset.id = response.id;
      let answerBtn = document.createElement('button');
      answerBtn.dataset.answerId = i;
      answerBtn.textContent = response.data.answers[i];
      pollAnswers.append(answerBtn);
   };
   getBtn()
}

function getBtn() {
   buttons = Array.from(document.querySelectorAll('button'));
}

// Запрос статистики

pollAnswers.addEventListener('click', (e) => {
   if (e.target.tagName === 'BUTTON') {
      alert('Ваш голос засчитан');

      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send(`vote=${+e.target.parentElement.dataset.id}&answer=${+e.target.dataset.answerId}`);

      xhr.addEventListener('readystatechange', (e) => {
         if (xhr.readyState === xhr.DONE) {
            getStat();
         }
      })

      function getStat() {
         let response = JSON.parse(xhr.response);
         pollAnswers.innerHTML = '';
         let votesCount = 0;
         response.stat.forEach(e => {
            votesCount += e.votes;
         });
         pollAnswers.classList.add('poll__answers_onstat');
         for (let i in response.stat) {
            pollAnswers.dataset.id = response.id;
            let answerStat = document.createElement('div');
            answerStat.innerHTML = `<span>${response.stat[i].answer}: <b>${(response.stat[i].votes / (votesCount / 100)).toFixed(2)}%</b></span>`;
            // answerBtn.textContent = response.data.answers[i];
            pollAnswers.append(answerStat);
         };

      }
   }
})