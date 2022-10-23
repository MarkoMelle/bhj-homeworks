const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
let activeTab;

function getActiveTab() {
   activeTab = tabs.indexOf(document.querySelector('.tab_active'));
}

function tabSwitch(clickedTab) {
   getActiveTab();
   tabs[activeTab].classList.remove('tab_active');
   tabsContent[activeTab].classList.remove('tab__content_active');
   tabs[clickedTab].classList.add('tab_active');
   tabsContent[clickedTab].classList.add('tab__content_active');
};

tabs.forEach(function (Element, index) {
   Element.addEventListener('click', () => tabSwitch(index));
});