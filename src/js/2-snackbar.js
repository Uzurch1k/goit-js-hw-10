// ================================================================

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ================================================================

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const stateInput = document.querySelector('input[name="state"]:checked');
  const delayInput = document.querySelector('input[type="number"]');

  const stateСhoice = stateInput.value;
  const delayMilSecond = Number(delayInput.value);

  createPromise(stateСhoice, delayMilSecond)
    .then(delay => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        backgroundColor: '#59A10D',
        messageColor: '#fff',
        timeout: 3000,
        progressBar: false,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        timeout: 3000,
        progressBar: false,
        position: 'topRight',
      });
    });

  form.reset();
}

function createPromise(value, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  return promise;
}
