// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonStart = document.querySelector('button[data-start]');
const remainderDays = document.querySelector('[data-days]');
const remainderHours = document.querySelector('[data-hours]');
const remainderMinutes = document.querySelector('[data-minutes]');
const remainderSeconds = document.querySelector('[data-seconds]');

const curentDate = new Date;
let remainderTime;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDates[0].getTime() < curentDate.getTime() ? (
            Notify.failure('Please choose a date in the future')
        ) : (
            buttonStart.disabled = false,
            remainderTime = selectedDates[0].getTime() - curentDate.getTime())
    }
};

buttonStart.disabled = true;
flatpickr('#datetime-picker', options);
buttonStart.addEventListener('click', onButtonStart)

function onButtonStart() {
    buttonStart.disabled = true;
    const timerID = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(remainderTime);

        remainderDays.textContent = addLeadingZero(days);
        remainderHours.textContent = addLeadingZero(hours);
        remainderMinutes.textContent = addLeadingZero(minutes);
        remainderSeconds.textContent = addLeadingZero(seconds);

        remainderTime -= 1000;
        if (remainderTime < 0) {
            clearInterval(timerID);
        }
    }, 1000);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0")
}
