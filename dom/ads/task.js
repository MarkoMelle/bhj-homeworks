let activeEl = document.querySelector('.rotator__case_active');
const FirstCh = (el = activeEl) => el.parentElement.firstElementChild;
const NextElm = (el = activeEl) => el.nextElementSibling;
function speed(el = activeEl) { return el.dataset.speed }
function color(el = activeEl) { return el.dataset.color }
function getActive() { activeEl = document.querySelector('.rotator__case_active'); }
activeEl.style.color = color(activeEl);

function rotate() {
   activeEl.classList.remove('rotator__case_active');
   if (activeEl.nextElementSibling === null) {
      FirstCh().classList.add('rotator__case_active');
      FirstCh().style.color = color(FirstCh());
   } else {
      NextElm().classList.add('rotator__case_active');
      NextElm().style.color = color(NextElm());
   }
   getActive()
   setTimeout(rotate, speed(activeEl));
}

setTimeout(rotate, speed(activeEl));
