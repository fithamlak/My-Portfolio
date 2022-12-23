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
// preserve-data-in-the-browser

// get form elements and distract
const Form = document.getElementById('form');
const {
  name: nameInput,
  email: emailInput,
  message: messageInput,
} = Form.elements;

// check local storage available
// - if available : create local storage object
// - if not: null

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

let availableStorage;

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  availableStorage = window.localStorage;
} else {
  // Too bad, no localStorage for us
  availableStorage = null;
}
// create a single object for the data
const formDataObject = {};

function storeData() {
  formDataObject.name = nameInput.value;
  formDataObject.email = emailInput.value;
  formDataObject.message = messageInput.value;
  const jsonData = JSON.stringify(formDataObject);
  availableStorage.setItem('FormData', jsonData);
}
// listen to change on input fields
nameInput.addEventListener('change', () => {
  storeData();
});

emailInput.addEventListener('change', () => {
  storeData();
});

messageInput.addEventListener('change', () => {
  storeData();
});