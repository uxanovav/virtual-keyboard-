const inputArea = document.querySelector('#main-text-area');
const keyboard = document.querySelector('.wrapper .keyboard');
document.onkeydown = keyDown;
document.onkeyup = keyUp;

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
        keyboard.style.opacity = '1';
        keyboardFlag = !keyboardFlag;
        initializeKeyboard();
    } else {
        keyboard.style.height = '0';
        keyboard.style.opacity = '0';
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
        if (el === '42') {
            keyboard.innerHTML += `<div class = "key" id = "shift-key" data-key = "` + el + `">` + buttonsObj[el].englishDefault + `</div>`;
            continue;
        }
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
            if (btn.dataset.key == '14') {
                let value = inputArea.value;
                inputArea.value = value.substring(0, value.length - 1);
                inputArea.focus();
            } else if (btn.dataset.key == "54") {
                inputArea.value += ' ';
                inputArea.focus();
            } else if (btn.dataset.key == "41") {
                inputArea.value += '\n';
                inputArea.focus();
            } else if ( btn.dataset.key != '29' && btn.dataset.key != '41' && btn.dataset.key != '42' && btn.dataset.key != '53' && btn.dataset.key != '55'){
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


function keyDown(e) {
    let button = document.querySelectorAll('.key');
    let shiftButton = document.querySelector('#shift-key');
    button.forEach(btn => {
        if (btn.innerHTML === e.key && e.key !== 'Shift') {
            if (e.key === 'CapsLock') {
                btn.click();           
            }
            btn.classList.add('active')
            setTimeout(changeColor, 100, btn);
        } else if (e.key === 'Backspace') {
            let active = document.querySelector('.keyboard .key[data-key = "14"]');
            active.classList.add('active')
            setTimeout(changeColor, 100, active);
        } else if (e.key === ' ') {
            let active = document.querySelector('.keyboard .key[data-key = "54"]');
            active.classList.add('active')
            setTimeout(changeColor, 100, active);
        }
        inputArea.focus();
    })
    if (e.key === 'Shift') {
        shiftButton.classList.add('active')
        shiftSwitch();
    }
}
function keyUp(e) {
    if (e.key === 'Shift') {
        let active = document.querySelector('.keyboard .key[data-key = "42"]');
        setTimeout(changeColor, 1, active);
        shiftSwitch();
    }
}
function changeColor(elemet) {
    elemet.classList.remove('active');
}