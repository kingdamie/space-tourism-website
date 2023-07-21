const num = document.querySelectorAll('.btn-num');
const head = document.getElementById('head')
const down = document.getElementById('down')
const imag = document.getElementById('imag')
const mob = document.getElementById('mob')

// const newimg = "./starter-code/assets/technology/image-space-capsule-landscape.jpg"
const newimg2 = "./starter-code/assets/technology/image-spaceport-portrait.jpg"
const newimg1 = "./starter-code/assets/technology/image-space-capsule-portrait.jpg"
const newimg3 = "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg"

const phoneimg2 = "./starter-code/assets/technology/image-spaceport-landscape.jpg"
const phoneimg1 = "./starter-code/assets/technology/image-space-capsule-landscape.jpg"
const phoneimg3 = "./starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
console.log(num)

const screenWidth = window.innerWidth;

num[0].addEventListener('click', () => {
    head.textContent= ' space capsule'
    down.textContent = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where youll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
    num[1].classList.remove('active')
    num[0].classList.add('active')
    num[2].classList.remove('active')
    if(screenWidth >= 640){
        imag.src = newimg1
    }
    else{
        mob.src = phoneimg1
    }
    
})
num[1].addEventListener('click', () => {
    head.textContent='Spaceport'
    down.textContent = ' A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    // imag.src = newimg2
    num[0].classList.remove('active')
    num[1].classList.add('active')
    num[2].classList.remove('active')
    if(screenWidth >= 640){
        imag.src = newimg2
    }
    else{
        mob.src = phoneimg2
    }
    
})
num[2].addEventListener('click', () => {
    head.textContent= ' Launch vehicle'
    down.textContent = ' A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!'
    num[1].classList.remove('active')
    num[2].classList.add('active')
    num[0].classList.remove('active')
    if(screenWidth >= 640){
        imag.src = newimg3
    }
    else{
        mob.src = phoneimg3
    }
})