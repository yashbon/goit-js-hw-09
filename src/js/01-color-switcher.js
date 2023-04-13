const backgroundBody = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
// let idInterval;

buttonStop.disabled = true;

buttonStart.addEventListener('click', onButtonStart);
// buttonStop.addEventListener('click', onButtonStop);

function onButtonStart() {

    const idInterval = setInterval(() => { backgroundBody.style.backgroundColor = getRandomHexColor() }, 1000);
    buttonStart.disabled = true;
    buttonStop.disabled = false;

    buttonStop.addEventListener('click', onButtonStop);

    function onButtonStop() {
        buttonStart.disabled = false;
        buttonStop.disabled = true;
        clearInterval(idInterval);
    }
}

// function onButtonStop() {
//     buttonStart.disabled = false;
//     buttonStop.disabled = true;
//     clearInterval(id);
// }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}