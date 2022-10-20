// const timer = document.getElementById('timer');

// let counter = +timer.textContent;

// let interval = setInterval(() => {
//    if (counter === 0) {
//       alert('Вы победили в конкурсе!');
//       clearInterval(interval);
//    }
//    --counter;
//    timer.textContent = counter;
// }, 1000);

const timer = document.getElementById('timer');

function getTimeRemaining(endtime) {
   let t = Date.parse(endtime) - Date.parse(new Date());
   let seconds = Math.floor((t / 1000) % 60);
   let minutes = Math.floor((t / 1000 / 60) % 60);
   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
   return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
   };
}

function initializeClock(endtime) {
   let timeinterval = setInterval(function () {
      let t = getTimeRemaining(endtime);
      timer.textContent = `${('0' + t.hours).slice(-2)}:${('0' + t.minutes).slice(-2)}:${('0' + t.seconds).slice(-2)}`;
      if (t.total <= 0) {
         let link = document.getElementById('link');
         link.setAttribute('href', '/download.png');
         link.setAttribute('download', 'download.png');
         link.click();
         clearInterval(timeinterval);
      }
   }, 1000);
}

initializeClock('October 20 2022 19:21:59 GMT+02:00');

function updateClock() {
   let t = getTimeRemaining(endtime);
   timer.textContent = `${('0' + t.hours).slice(-2)}:${('0' + t.minutes).slice(-2)}:${('0' + t.seconds).slice(-2)}`;
   if (t.total <= 0) {
      let link = document.getElementById('link');
      link.setAttribute('href', '/download.png');
      link.setAttribute('download', 'download.png');
      link.click();
      clearInterval(timeinterval);
   }
}
updateClock();
let timeinterval = setInterval(updateClock, 1000);


