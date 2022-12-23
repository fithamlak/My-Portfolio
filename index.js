const nav = document.querySelector('#toolbar');
const hamburgerButton = document.querySelector('.hamberger');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.menu-list');
const myLogo = document.querySelector('.logo');

function openNav() {
  nav.classList.remove('toolbar');
  nav.classList.add('header-bg-color');
  hamburgerButton.classList.toggle('invisible');
  myLogo.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.toggle('open_menu');
}

function closeNav() {
  nav.classList.remove('header-bg-color');
  nav.classList.add('toolbar');
  hamburgerButton.classList.toggle('invisible');
  myLogo.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.toggle('open_menu');
}

hamburgerButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);
navItems.addEventListener('click', closeNav);

function emailValidation(email, error, event) {
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const errMessage = document.querySelector('.validation-message');
    errMessage.innerText = error;
  }
}
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  const invalidEmail = 'Error, please consider to write all lower case letters.';
  const email = form.elements.mail;
  const emailText = email.value;
  emailValidation(emailText, invalidEmail, event);
});