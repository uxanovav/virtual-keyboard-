const inputArea = document.querySelector('#main-text-area');
const keyboard = document.querySelector('.wrapper .keyboard');
const firstLine = document.querySelector('.first-line');
const secondLine = document.querySelector('.second-line');
const thirdLine = document.querySelector('.third-line');
const fourLine = document.querySelector('.four-line');


let keyboardFlag = false;

const arr1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
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
    firstLine.innerHTML = line1;

    for (let i = 0; i < arr2.length; i++) {
        line2 += `<div class = "key" data = "` + arr2[i] + `">` + String.fromCharCode(arr2[i]) + `</div>`;
    }
    secondLine.innerHTML = line2;

    for (let i = 0; i < arr3.length; i++) {
        line3 += `<div class = "key" data = "` + arr3[i] + `">` + String.fromCharCode(arr3[i]) + `</div>`;
    }
    thirdLine.innerHTML = line3;

    for (let i = 0; i < arr4.length; i++) {
        line4 += `<div class = "key" data = "` + arr4[i] + `">` + String.fromCharCode(arr4[i]) + `</div>`;
    }
    fourLine.innerHTML = line4;
}

init();


const button = document.querySelectorAll('.key');
console.log(button);

inputArea.addEventListener('focus', showKeyboard);

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

for (let i = 0; i < button.length; i++){
    let pressBtn = button[i];
    pressBtn.addEventListener('click', function (e) {
        console.log(pressBtn.innerHTML);
        inputArea.innerHTML += pressBtn.innerHTML;
    })
}



