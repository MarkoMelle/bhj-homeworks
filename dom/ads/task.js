const rotatorItems = Array.from(window.rotator1.querySelectorAll('.rotator__case'));
let activeId = 0;
let speed = () => +rotatorItems[activeId].dataset.speed;
let color = () => rotatorItems[activeId].dataset.color;
rotatorItems[activeId].style.color = color();

function getActiveId() {
   activeId = rotatorItems.indexOf(document.querySelector('.rotator__case_active'));
   if (activeId === (rotatorItems.length - 1)) {
      rotatorItems[activeId].classList.remove('rotator__case_active');
      activeId = 0;
      rotatorItems[activeId].classList.add('rotator__case_active');
   };
};

function rotate() {
   rotatorItems[activeId].classList.remove('rotator__case_active');
   rotatorItems[activeId].nextElementSibling.classList.add('rotator__case_active');
   getActiveId();
   rotatorItems[activeId].style.color = color();
   setTimeout(rotate, speed());
}

setTimeout(rotate, speed());
