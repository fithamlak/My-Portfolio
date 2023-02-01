// Variables for html elements
const nav = document.querySelector('#toolbar');
const hamburgerButton = document.querySelector('.hamberger');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.menu-list');
const myLogo = document.querySelector('.logo');
const popWindow = document.querySelector('.popup_card');
const body = document.querySelector('body');
const header = document.querySelector('header');
const xProject = document.querySelector('.close_icon');
const center = document.querySelector('.center');
const main = document.querySelector('.main');
const footer = document.querySelector('footer');
const skillsStack = document.querySelector('.popup_skills');
const techStach = document.querySelector('.tech_stack');

// function to open mobile menu when hamberger is clicked
function openNav() {
  nav.classList.remove('toolbar');
  nav.classList.add('header-bg-color');
  hamburgerButton.classList.toggle('invisible');
  myLogo.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.toggle('open_menu');
}
// function to close mobile menu when close icon  is clicked
function closeNav() {
  nav.classList.remove('header-bg-color');
  nav.classList.add('toolbar');
  hamburgerButton.classList.toggle('invisible');
  myLogo.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.toggle('open_menu');
}
// add enent listners for html elements
hamburgerButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);
navItems.addEventListener('click', closeNav);

// array of objects with propertis and datas for accomplishments
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
// retrive the data by stringify and
// set the object to local on loads of page
function retrieveData() {
  const contactData = availableStorage.getItem('FormData');
  const parseContactData = JSON.parse(contactData);
  if (contactData?.length > 0) {
    const { name, email, message } = parseContactData;
    nameInput.value = name || '';
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
}
const accomplishmentArray = [
  {
    id: 0,
    title: 'IoT Submit',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description:
    'This is a fully responsive static web for an Internet of Things summit. Users can navigate through multiple sections. This project was built using  JavaScript, HTML & CSS',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: './images/IoTMobile.PNG',
    ImageForDesktop: './images/IoT2.PNG',
    accomplishmentDetailModel: './images/Iot-model.PNG',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://fithamlak.github.io/IoT-Conference-CP1/',
    source: 'https://github.com/fithamlak/IoT-Conference-CP1',
  },
  {
    id: 1,
    title: 'Todo-List',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description:
    'To Do List is a web used to help with everyday todo lists. Users can add, remove, edit or clear tasks from the list, this application was built in vanilla JavaScript. It uses browsers memory to save tasks',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: './images/todolist-mobile.PNG',
    ImageForDesktop: './images/todo-list.PNG',
    accomplishmentDetailModel: './images/todolist-model.PNG',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://fithamlak.github.io/To-do-list/dist/',
    source: 'https://github.com/fithamlak/To-do-list/',
  },
  {
    id: 2,
    title: 'Tonic',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: './images/third-work.svg',
    ImageForDesktop: './images/work3-desktop-view.svg',
    accomplishmentDetailModel: './images/accomplishment-details-model.svg',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://fithamlak.github.io/',
    source: 'https://github.com/fithamlak/My-portfolio',
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: './images/fourth-work.svg',
    ImageForDesktop: './images/work4-desktop-view.svg',
    accomplishmentDetailModel: './images/accomplishment-details-model.svg',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://fithamlak.github.io/',
    source: 'https://github.com/fithamlak/My-portfolio',
  },
];

// function to display details popup windo when seeProjrct buttons of each accomplishment clicked
function seeProject(k) {
  const title = document.querySelector('.popup_title');
  const techStach = document.querySelector('.tech_stack');
  const popupDescription = document.querySelector('.popup_text');
  const popupImage = document.querySelector('.popup_img');
  const skillsStack = document.querySelector('.popup_skills');
  const hor = document.querySelector('.horizontal');
  const col = document.querySelector('.colum');
  const but = document.querySelector('.butt');
  const center = document.querySelector('.center');
  const main = document.querySelector('.main');
  const footer = document.querySelector('footer');

  title.innerText = accomplishmentArray[k].title;
  for (let l = 0; l < accomplishmentArray[k].skill.length; l += 1) {
    const skill = document.createElement('li');
    skill.innerText = accomplishmentArray[k].skill[l];
    skillsStack.append(skill);
  }
  if (window.matchMedia('screen and (min-width:320px) and (max-width:768px)').matches) {
    popupImage.src = accomplishmentArray[k].ImageForMobile;
  } else {
    popupImage.src = accomplishmentArray[k].accomplishmentDetailModel;
  }
  popupDescription.innerText = accomplishmentArray[k].description;

  for (let l = 0; l < accomplishmentArray[k].technologies.length; l += 1) {
    if (techStach.children.length <= 5) {
      const tech = document.createElement('li');
      tech.innerText = accomplishmentArray[k].technologies[l];
      techStach.append(tech);
    }
  }

  if (but.children.length <= 1) {
    const liveElement = document.createElement('a');
    liveElement.href = accomplishmentArray[k].live;
    liveElement.innerText = 'see Live';
    const liveIcon = document.createElement('i');
    liveIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square');
    liveElement.appendChild(liveIcon);
    but.appendChild(liveElement);
    const sourceElement = document.createElement('a');
    sourceElement.href = accomplishmentArray[k].source;
    sourceElement.innerText = 'See source';
    const sourceIcon = document.createElement('i');
    sourceIcon.classList.add('fa-brands', 'fa-github');
    sourceElement.appendChild(sourceIcon);
    but.appendChild(sourceElement);
    techStach.append('');
    col.append(techStach);
    col.append(but);
    hor.append(popupDescription);
    hor.append(col);
  }
  popWindow.classList.toggle('invisble');
  // popup.classList.add('blured')
  body.style.background = '#c1c7d0';
  header.style.background = '#c1c7d0';
  header.classList.add('hide');

  // body.style.overflowY = "hidden";
  center.style.display = 'flex';
  main.classList.add('hide');
  footer.classList.add('hide');
  xProject.style.display = 'block';
}
// daynamic creation of accomplishments
const accomplishmentHandler = () => {
  const accomplishments = document.getElementById('works');
  accomplishmentArray.forEach((accomplishment, index) => {
    const accomplishmentCard = document.createElement('li');
    accomplishmentCard.classList.add('achomplishment-card');
    accomplishmentCard.innerHTML = `
      <div class='image-container'>
        <img  class='desktop-view'
          src=${accomplishment.ImageForDesktop}
          alt=${accomplishment.alt}
        />
        <img class='mobile-view'
          src=${accomplishment.ImageForMobile}
        />
      </div>
      <div class='content-container'>
        <h2>${accomplishment.title}</h2>
        <ul class='skill'>
          <li>${accomplishment.skill[0]}</li>
          <li>&#x2022;</li>
          <li>${accomplishment.skill[1]}</li>
          <li>&#x2022;</li>
          <li>${accomplishment.skill[2]}</li>
        </ul>
        <p>${accomplishment.description}</p>  
        <ul class='technologies'>
          <li>${accomplishment.technologies[0]}</li>
          <li>${accomplishment.technologies[1]}</li>
          <li>${accomplishment.technologies[2]}</li>
        </ul>
        <div id='button-container'>
          <button class='project_btn btn'>
          See Project
         </button>
       </div>
      </div>`;
    const pButton = accomplishmentCard.querySelector('.project_btn');
    pButton.addEventListener('click', () => {
      seeProject(index);
    });

    accomplishments.appendChild(accomplishmentCard);
  });
};
window.onload = () => {
  retrieveData();
  accomplishmentHandler();
};

// Function to close details popup windo when close icon is clicked
function closeProject() {
  popWindow.classList.toggle('invisble');
  skillsStack.innerHTML = '';
  techStach.innerHTML = '';
  body.style.background = '#fff';
  header.style.background = '#fff';
  header.classList.remove('hide');
  body.classList.remove('hide');
  center.style.display = 'none';
  main.classList.remove('hide');
  footer.classList.remove('hide');
}

xProject.addEventListener('click', () => closeProject());
