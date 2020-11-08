const inputArea = document.querySelector('#main-text-area');
const keyboard = document.querySelector('.wrapper .keyboard');

import {buttonsObj} from "./buttons.js";

let keyboardFlag = false;
let inputType = 'lowerEN';
let shiftFlag = 'lower';
let langFlag = 'EN';

let showKeyboard = () => {
    if (keyboardFlag === false) {
        keyboard.style.height = '50%';
        keyboard.style.display = 'flex';
        keyboard.style.flexWrap = 'wrap';
        keyboardFlag = true;
        initializeKeyboard();
    }
}

inputArea.addEventListener('dblclick',showKeyboard)

const checkInputType  = (shiftFlag, langFlag) => {
    inputType = shiftFlag + langFlag;
}

const buildKeyboard = () => {
    keyboard.innerHTML = '';
    for (let el in buttonsObj){
        if (inputType === 'lowerEN'){
            console.log(buttonsObj[el].englishDefault);
            keyboard.innerHTML += `<div class = "key" data-key = "` + el + `">` + buttonsObj[el].englishDefault + `</div>`;
        }
        if (inputType === 'upperEN'){
            keyboard.innerHTML += `<div class = "key" data-key = "` + el + `">` + buttonsObj[el].enlishUpperCase + `</div>`;
        }
        if (inputType === 'lowerRU'){
            console.log(buttonsObj[el].russianDefault);
            keyboard.innerHTML += `<div class = "key" data-key = "` + el + `">` + buttonsObj[el].russianDefault + `</div>`;
        }
        if (inputType === 'upperRU'){
            console.log(buttonsObj[el].russianUpperCase);
            keyboard.innerHTML += `<div class = "key" data-key = "` + el + `">` + buttonsObj[el].russianUpperCase + `</div>`;
        }
    }
}

const initializeKeyboard = () => {
    checkInputType(shiftFlag,langFlag);
    buildKeyboard();
} 


/* 
document.onkeydown = handle;


let capsFlag = false;
let keyboardFlag = false;

function handle(e) {
    console.log(e.key);
    if (e.key === 'Backspace') {
        let active = document.querySelector('.keyboard .key[data-key = "bckspc"]');
        active.classList.add('active')
        setTimeout(changeColor, 100, active);
    }
    if (e.key === 'CapsLock') {
        let active = document.querySelector('.keyboard .key[data-key = "caps"]');
        if (capsFlag === false) {
            capsIcon.classList.add('on');
            active.classList.add('active')
            setTimeout(changeColor, 100, active);
            capsFlag = true;
        } else {
            capsIcon.classList.remove('on');
            active.classList.add('active')
            setTimeout(changeColor, 100, active);
            capsFlag = false;
        }
    }
    inputArea.focus();
} */
/* const arr1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
const arr2 = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
const arr3 = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
const arr4 = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

function init() {
    let line1 = '';
    let line2 = '';
    let line3 = '';
    let line4 = '';
    for (let i = 0; i < arr1.length; i++) {
        line1 += `<div class = "key" data = "` + arr1[i] + `">` + String.fromCharCode(arr1[i]) + `</div>`;
    }
    firstLine.innerHTML = line1 + `<div class = "key" data-key = "bckspc">⇦</div>`;

    for (let i = 0; i < arr2.length; i++) {
        line2 += `<div class = "key" data = "` + arr2[i] + `">` + String.fromCharCode(arr2[i]) + `</div>`;
    }
    secondLine.innerHTML = line2;

    for (let i = 0; i < arr3.length; i++) {
        line3 += `<div class = "key" data = "` + arr3[i] + `">` + String.fromCharCode(arr3[i]) + `</div>`;
    }
    thirdLine.innerHTML = `<div class = "key caps" data-key = "caps">Caps Lock <span class='caps-icon'>▲</span></div>` + line3;

    for (let i = 0; i < arr4.length; i++) {
        line4 += `<div class = "key" data = "` + arr4[i] + `">` + String.fromCharCode(arr4[i]) + `</div>`;
    }
    fourLine.innerHTML = line4;
}

init();

let button = document.querySelectorAll('.key');
const capsIcon = document.querySelector('.keyboard .key .caps-icon');
console.log(button);

inputArea.addEventListener('dblclick', showKeyboard);

document.onkeypress = function (event) {
    let active = document.querySelector('.keyboard .key[data = "' + event.charCode + '"]');
    active.classList.add('active')
    setTimeout(changeColor, 100, active);
}

function changeColor(elemet) {
    elemet.classList.remove('active');
}

function showKeyboard() {
    if (keyboardFlag === false) {
        keyboard.style.height = '50%';
        keyboard.style.display = 'block';
        keyboardFlag = true;
    } else {
        keyboard.style.height = '0';
        keyboard.style.display = 'none';
        keyboardFlag = false;
    }
}

button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.key == "bckspc") {
            let value = inputArea.value;
            inputArea.value = value.substring(0, value.length - 1);
        } else if (btn.dataset.key == "caps") {
            console.log('oncaps press')
            if (capsFlag == false) {
                capsIcon.classList.add('on');
                capsFlag = true;
            } else {
                capsIcon.classList.remove('on');
                capsFlag = false;
            }
        } else {
            inputArea.value += btn.innerHTML;
            inputArea.focus();
        }
    })
});
 */


