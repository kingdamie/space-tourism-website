const menuBtn = document.getElementById('menu');
const closeBtn = document.querySelector(".close");
const rightSec = document.querySelector("#drop");
console.log(menuBtn)
console.log(closeBtn)
console.log(rightSec)

menuBtn.addEventListener('click', () => {
    rightSec.classList.remove('hide')
    rightSec.style.transition = '3s'
})
closeBtn.addEventListener('click', () => {
    rightSec.classList.add('hide')
})
