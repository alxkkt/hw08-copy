import throttle from 'lodash.throttle';

const FEEDBACK_DATA = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateTextArea();

function onFormInput(e) {
  localStorage.setItem(
    FEEDBACK_DATA,
    JSON.stringify({
      email: e.target.form.elements.email.value,
      message: e.target.form.elements.message.value,
    }),
  );
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(FEEDBACK_DATA)));

  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_DATA);
}

function populateTextArea() {
  if (localStorage.getItem(FEEDBACK_DATA)) {
    const feedbackData = JSON.parse(localStorage.getItem(FEEDBACK_DATA));

    form.elements.email.value = feedbackData.email;
    form.elements.message.value = feedbackData.message;
  }
}
