gsap.to('.mainheading', {
    text:'Dear Santa,',
    duration:2,
    delay:0.1,
    yoyo:false,
    ease:'power1.in',

})
gsap.to('.maintext', {opacity:1, delay:2.5, duration:3})
gsap.to('.input', {opacity:1, delay:4, duration:2})

const nameLine = document.querySelector('.myNameIs');
let myName = prompt('What is your name?');
//nameLine.classList.add('nameStyle');
nameLine.textContent = ( myName + ',');


const inputField = document.querySelector('.inputField');
const button = document.querySelector('.btn');
const wishesContainer = document.querySelector('.wishesContainer');

button.addEventListener('click', ()=>{
    const item = document.createElement('li');
    item.innerText = inputField.value;
    if (inputField.value.length === 0){
        return false;
    }
    item.classList.add('wishes')
    wishesContainer.appendChild(item);
    inputField.value ='';

    item.addEventListener('click',()=>{
        item.classList.add('done');

    })
    item.addEventListener('dblclick', ()=>{
        wishesContainer.removeChild(item);
    })
})