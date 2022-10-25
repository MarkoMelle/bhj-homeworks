//Делегирование

const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

function getActiveTab() {
   return tabs.indexOf(document.querySelector('.tab_active'));
}

function tabToggle(Event) {
   if (Event.target.classList.contains('tab')) {
      tabs.forEach(elm => elm.classList.remove('tab_active'))
      Event.target.classList.add('tab_active');
      tabsContent.forEach(elm => elm.classList.remove('tab__content_active'))
      tabsContent[getActiveTab()].classList.add('tab__content_active');
   } else return;
};

window.tabs1.addEventListener('click', tabToggle); //Делегирование


// Обработчик на каждый элемент

// const tabs = Array.from(document.querySelectorAll('.tab'));
// const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

// function getActiveTab() {
//    return tabs.indexOf(document.querySelector('.tab_active'));
// }

// function tabSwitch(clickedTab) {
//    tabs[getActiveTab()].classList.remove('tab_active');
//    tabsContent[getActiveTab()].classList.remove('tab__content_active');
//    tabs[clickedTab].classList.add('tab_active');
//    tabsContent[clickedTab].classList.add('tab__content_active');
// };

// tabs.forEach(function (Element, index) {
//    Element.addEventListener('click', () => tabSwitch(index));
// });