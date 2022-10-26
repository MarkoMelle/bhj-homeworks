const dropdown = Array.from(document.getElementsByClassName('dropdown'));
const dropValue = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownList = Array.from(document.getElementsByClassName('dropdown__list'));
const dropdownLinks = [];

dropdownList.forEach((Element, index) => {
   dropdownLinks[index] = Array.from(Element.querySelectorAll('.dropdown__link'));
})

dropValue.forEach((Element, index) => Element.addEventListener('click', function () {
   if (dropdown[index].querySelector('.dropdown__list_active')) {
      dropdownList[index].classList.remove('dropdown__list_active');
      return;
   }
   dropdownList[index].classList.add('dropdown__list_active');
}
))

dropdownLinks.forEach((Element, index) => {
   Element.forEach((Element) => Element.addEventListener('click', function () {
      dropValue[index].textContent = Element.textContent;
      dropdownList[index].classList.remove('dropdown__list_active');
   })
   )
});

Array.from(document.getElementsByClassName('dropdown__link')).forEach(Element =>
   Element.setAttribute('onclick', 'return false')
);

