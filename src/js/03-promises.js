import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const options = {
	timeout: 5000,
};

form.addEventListener('submit', callCreatePromise);

function callCreatePromise(event) {
	document.querySelector('button[type=submit]').disabled = true;
	event.preventDefault();
	const { delay, step, amount } = event.currentTarget.elements;
	let promiseDelay = 0;
	setTimeout(() => {
		document.querySelector('button[type=submit]').disabled = false;
	},
		options.timeout + Number(delay.value) + Number(step.value) * Number(amount.value) + 1);
	for (let i = 1; i <= amount.value; i++) {
		promiseDelay = Number(delay.value) + Number(step.value) * i;

		createPromise(i, promiseDelay)
			.then(({ position, delay }) => {
				Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, options);
			})
			.catch(({ position, delay }) => {
				Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, options);
			})
	}
	// тут можна застосувати: event.currentTarget.reset(); Тоді не потрібно 11 і 15 рядки
}

function createPromise(position, delay) {
	return new Promise((resolve, reject) => {
		const shouldResolve = Math.random() > 0.3;
		setTimeout(() => {
			if (shouldResolve) {
				// Fulfill
				resolve({ position, delay })
			} else {
				// Reject
				reject({ position, delay })
			}
		}, delay)
	})
}
