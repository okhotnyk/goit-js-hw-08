import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
let savedData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

onRefreshWindow();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(savedData);
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  savedData = {};
}

function onFormInput(event) {
  savedData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
  console.log(savedData);
}

function onRefreshWindow() {
  let storageContent = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (storageContent) {
    savedData = storageContent;
    if (savedData.email) {
      email.value = savedData.email;
    }
    if (savedData.message) {
      message.value = savedData.message;
    }
  }
}
