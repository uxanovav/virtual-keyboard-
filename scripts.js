const inputArea = document.querySelector('#main-text-area');
const keyboard = document.querySelector('.wrapper .keyboard');

import { buttonsObj } from "./buttons.js";

let keyboardFlag = false;
let inputType = 'lowerEN';
let shiftFlag = 'lower';
let langFlag = 'EN';

let showKeyboard = () => {
    if (keyboardFlag === false) {
        keyboard.style.height = '50%';
        keyboard.style.display = 'flex';
        keyboard.style.flexWrap = 'wrap';
        keyboardFlag = !keyboardFlag;
        initializeKeyboard();
    } else {
        keyboard.style.display = 'none';
        keyboardFlag = !keyboardFlag;
    }
}

inputArea.addEventListener('dblclick', showKeyboard)

const checkInputType = (shiftFlag, langFlag) => {
    inputType = shiftFlag + langFlag;
}

const langSwitch = () => {
    if (langFlag === 'EN') {
        langFlag = 'RU';
    } else {
        langFlag = 'EN'
    }
    initializeKeyboard();
}

const shiftSwitch = () => {
    if (shiftFlag === 'lower') {
        shiftFlag = 'upper';
    } else {
        shiftFlag = 'lower';
    }
    initializeKeyboard();
}


const buildKeyboard = () => {
    keyboard.innerHTML = '';
    for (let el in buttonsObj) {
        if (inputType === 'lowerEN') {
            keyboard.innerHTML += `<div class = "key" data-key = "` + el + `">` + buttonsObj[el].englishDefault + `</div>`;
        }
        if (inputType === 'upperEN') {
            keyboard.innerHTML += `<div class = "key" data-key = "` + el + `">` + buttonsObj[el].englishUpperCase + `</div>`;
        }
        if (inputType === 'lowerRU') {
            keyboard.innerHTML += `<div class = "key" data-key = "` + el + `">` + buttonsObj[el].russianDefault + `</div>`;
        }
        if (inputType === 'upperRU') {
            keyboard.innerHTML += `<div class = "key" data-key = "` + el + `">` + buttonsObj[el].russianUpperCase + `</div>`;
        }
        if (el === '14' || el === '28' || el === '41' || el === '52') {
            keyboard.innerHTML += '<div class = "break"></div>';
        }
    }
    let capsLockKey = document.querySelector('.keyboard .key[data-key = "29"]');
    let enterKey = document.querySelector('.keyboard .key[data-key = "41"]');
    let shiftKey = document.querySelector('.keyboard .key[data-key = "42"]');
    let langKey = document.querySelector('.keyboard .key[data-key = "53"]');
    let spaceKey = document.querySelector('.keyboard .key[data-key = "54"]');
    let hideKey = document.querySelector('.keyboard .key[data-key = "55"]');
    let button = document.querySelectorAll('.key');
    capsLockKey.style.width = "100px";
    enterKey.style.width = "70px";
    shiftKey.style.width = "100px";
    spaceKey.style.width = "30%";
    langKey.addEventListener('click', langSwitch);
    capsLockKey.addEventListener('click', shiftSwitch);
    shiftKey.addEventListener('mousedown', shiftSwitch);
    shiftKey.addEventListener('mouseup', shiftSwitch);
    hideKey.addEventListener('click', showKeyboard);
    button.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.key == "14") {
                let value = inputArea.value;
                inputArea.value = value.substring(0, value.length - 1);
            } else {
                inputArea.value += btn.innerHTML;
                inputArea.focus();
            }
        })
    });

}

const initializeKeyboard = () => {
    checkInputType(shiftFlag, langFlag);
    buildKeyboard();
}

initializeKeyboard();





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
}

let button = document.querySelectorAll('.key');
const capsIcon = document.querySelector('.keyboard .key .caps-icon');

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


