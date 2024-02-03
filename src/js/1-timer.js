// ================================================================

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ================================================================

const inputClock = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');

// ================================================================

flatpickr(inputClock, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate(selectedDates[0]);
  },
});

// ================================================================

btnStart.disabled = true;
btnStart.style.backgroundColor = '#cfcfcf';
btnStart.style.color = '#989898';
btnStart.style.cursor = 'auto';

function userSelectedDate(selectedDate) {
  if (selectedDate <= Date.now()) {
    iziToast.error({
      title: 'Error',
      message: 'Illegal operation',
      backgroundColor: '#EF4040',
      titleColor: '#fff',
      titleSize: '16px',
      titleLineHeight: '1.5',
      messageColor: '#fff',
      messageSize: '16px',
      messageLineHeight: '1.5',
      position: 'topRight',
      timeout: 3000,
      progressBar: false,
      id: 'inputs',
    });

    btnStart.disabled = true;
    btnStart.style.backgroundColor = '#cfcfcf';
    btnStart.style.color = '#989898';
    btnStart.style.cursor = 'auto';
  } else {
    btnStart.disabled = false;
    btnStart.style.backgroundColor = null;
    btnStart.style.color = null;
    btnStart.style.cursor = 'pointer';
  }
}

// ================================================================

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  btnStart.disabled = true;
  btnStart.style.backgroundColor = '#cfcfcf';
  btnStart.style.color = '#989898';
  btnStart.style.cursor = 'auto';

  inputClock.disabled = true;
  inputClock.style.backgroundColor = '#FAFAFA';
  inputClock.style.color = '#808080';
  inputClock.style.cursor = 'auto';
  inputClock.style.borderColor = '#808080';

  const timerInt = setInterval(() => {
    const initDate = new Date(inputClock.value);
    const diffTime = initDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(diffTime);

    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    min.textContent = addLeadingZero(minutes);
    sec.textContent = addLeadingZero(seconds);

    if (diffTime < 1000) {
      clearInterval(timerInt);
      inputClock.disabled = false;
      inputClock.style.backgroundColor = null;
      inputClock.style.color = null;
      inputClock.style.cursor = 'pointer';
      inputClock.style.borderColor = null;
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
  return `${value}`.padStart(2, '0');
}
// ================================================================
