const menuBars = document.getElementById('menu-bars');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinks = document.getElementById('mobile-links');
const workModal = document.getElementById('work-modal');

const preventDefaultHandler = (e) => {
  e.preventDefault();
};

const openMenuHandler = () => {
  mobileMenu.classList.replace('d-none', 'd-flex');
  document.body.classList.add('stop-scrolling');
  document.body.addEventListener('touchmove', preventDefaultHandler);
};

function closeMenuHandler() {
  mobileMenu.classList.replace('d-flex', 'd-none');
  document.body.classList.remove('stop-scrolling');
  document.body.removeEventListener('touchmove', preventDefaultHandler);
}

menuBars.addEventListener('click', openMenuHandler);
closeMenuBtn.addEventListener('click', closeMenuHandler);
mobileLinks.addEventListener('click', closeMenuHandler);
const contactForm = document.getElementById('contact-form');
const {
  name: nameInput,
  email: emailInput,
  message: messageInput,
} = contactForm.elements;
const form = document.getElementById('contact-form');
const { email } = form.elements;
const alert = document.getElementById('alert');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    alert.classList.replace('d-none', 'd-flex');
    alert.textContent = 'Email must be lowercase - form not submitted!';
  }
});

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

const formData = {};

function storeData() {
  formData.name = nameInput.value;
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  const jsonData = JSON.stringify(formData);
  availableStorage.setItem('contactFormData', jsonData);
}

nameInput.addEventListener('change', () => {
  storeData();
});

emailInput.addEventListener('change', () => {
  storeData();
});

messageInput.addEventListener('change', () => {
  storeData();
});

function retrieveData() {
  const data = availableStorage.getItem('contactFormData');
  const parseData = JSON.parse(data);
  if (data?.length > 0) {
    const { name, email, message } = parseData;
    nameInput.value = name || '';
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
}

const btnReset = document.getElementById('btn-reset');

btnReset.addEventListener('click', (event) => {
  event.preventDefault();
  contactForm.reset();
  availableStorage.clear();
});

const worksArray = [
  
  {
    id: 0,
    title: 'Budget Tracker',
    experiences: ['RoR', ' Testing', '2023'],
    description:
      '[Budget Tracker] Is A mobile web application built with Ruby on Rails where users can manage their budget; users can list expenses associated with a category and see how much money they have spent and on what',
    technologies: ['sass', 'CSS3', 'Ruby', 'github', 'Rails', 'specr', 'Bootstraps'],
    urlMobile: './images/budget-app.PNG',
    urlDesktop: './images/budget-app.PNG',
    urlModal: './images/budget-app.PNG',
    alt: 'Budget_Traccker',
    live: 'https://expense-tracker-nl4s.onrender.com/',
    source: 'https://github.com/fithamlak/Budget-App',
  },
  {
    id: 1,
    title: 'Stocks-app',
    experiences: ['MERN stack', 'Testing', '2023'],
    description:
      'STOCKS is a single page web application (SPA) built with React, Redux, Axios, and Jest, which shows a list of popular companies stock tickers, and shows detailed financial metrics for each company stock ticker',
    technologies: ['HTML5', 'CSS3', 'javascript', 'github', 'React', 'Redux', 'Bootstraps'],
    urlMobile: './images/stock-app.PNG',
    urlDesktop: './images/stock-app.PNG',
    urlModal: './images/stock-app.PNG',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://stock-app-anup.onrender.com/',
    source: 'https://github.com/fithamlak/stock-app',
  },
  {
    id: 2,
    title: 'Space Travlers Hub',
    experiences: ['MERN stack', ' Testing', '2023'],
    description:
      '[Space Travelers Hub] is a Single Page JavaScript project, using React and ES6 features which fetch the rocket and missions data from spaceX rockets, spaceX missions API and we can reserve or cancel a Rockets and join or cancel a Missions.',
    technologies: ['HTML5', 'CSS3', 'javascript', 'github', 'React', 'Redux', 'Jest', 'Bootstraps', 'Reactbootsrap'],
    urlMobile: './images/travlers.PNG',
    urlDesktop: './images/travlers.PNG',
    urlModal: './images/travlers.PNG',
    alt: 'space_travlers_hub',
    live: 'https://space-travelers-f5v3.onrender.com/',
    source: 'https://github.com/Iqbal-Elham/Space-Travelers-Hub',
  },
  {
    id: 3,
    title: 'math-magicians',
    experiences: ['MERN stack', 'Testing', '2023'],
    description:
      'maths-magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: make simple calculations and read a random math-related quote.',
    technologies: ['HTML5', 'CSS3', 'javascript', 'github', 'React', 'Bootstraps'],
    urlMobile: './images/math-magicians.PNG',
    urlDesktop: './images/math-magicians.PNG',
    urlModal: './images/math-magicians.PNG',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://mathematic-app.onrender.com/',
    source: 'https://github.com/fithamlak/math-magicians',
  },
  {
    id: 4,
    title: 'Meal-app',
    experiences: ['javaScript', 'JavaScript API', '2023'],
    description:
      'MEAL APP is a JavaScript capstone project for building our own web application based on an external API. We choose a meal API which is an API that provides data about different meals that one can like and add comments and then build the webapp around it. The app has 2 interfaces (One for the home page and the other for showing and adding comments).',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    urlMobile: './images/meal-app.PNG',
    urlDesktop: './images/meal-app.PNG',
    urlModal: './images/meal-app.PNG',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://fithamlak.github.io/meal-app/dist/',
    source: 'https://github.com/fithamlak/meal-app',
  },
];

const worksLoadHandler = () => {
  const works = document.getElementById('works');
  worksArray.forEach((work) => {
    const workCard = document.createElement('li');
    workCard.classList.add('work-card');
    workCard.innerHTML = `
      <article class='work-card__article'>
        <div class='work-card__header'>
          <picture>
            <source srcset=${work.urlDesktop} media='(min-width: 768px)' />
            <img
              src=${work.urlMobile}
              alt=${work.alt}
            />
          </picture>
        </div>
        <div class='work-card__body'>
          <div class='elements'>
            <header class='work-card__title'>${work.title}</header>
            <div>
              <ul class='work-card__experience'>
                <li>${work.experiences[0]}</li>
                <li>&#x2022;</li>
                <li>${work.experiences[1]}</li>
                <li>&#x2022;</li>
                <li>${work.experiences[2]}</li>
              </ul>
            </div>
            <p class='work-card__description'>${work.description}</p>
            <div>
              <ul class='work-card__technologies'>
                <li>${work.technologies[0]}</li>
                <li>${work.technologies[1]}</li>
                <li>${work.technologies[2]}</li>
              </ul>
            </div>
            <div class='btn-container'>
              <button type='button' class='btn btn-project'>
                <a href='#'>See Project</a>
              </button>
            </div>
          </div>
        </div>
      </article>`;
    works.appendChild(workCard);
  });
};

const closeWorkModalHandler = () => {
  workModal.classList.replace('d-flex', 'd-none');
  workModal.innerHTML = '';
  document.body.classList.remove('stop-scrolling');
  document.body.removeEventListener('touchmove', preventDefaultHandler);
};

const cardClickHandler = (id) => {
  workModal.classList.replace('d-none', 'd-flex');
  document.body.classList.add('stop-scrolling');
  document.body.addEventListener('touchmove', preventDefaultHandler);
  const workCard = document.createElement('div');
  workCard.classList.add('work-card', 'container-md');
  workCard.innerHTML = `
    <div class='row'>
      <header class='work-card__title col-10'>
        ${worksArray[id].title}
      </header>      
      <div id='close-modal-btn' class='col-2 text-end'>
        <i class='fa-solid fa-x'></i>
      </div>
      <div class='col-12 my-3'>
        <ul class='work-card__experience'>
          <li class='text-uppercase'>${worksArray[id].experiences[0]}</li>
          <li>&#x2022;</li>
          <li>${worksArray[id].experiences[1]}</li>
          <li>&#x2022;</li>
          <li>${worksArray[id].experiences[2]}</li>
        </ul>
      </div>  
      <div class='work-card__header col-12 mb-5'>
        <picture>
          <source srcset=${worksArray[id].urlModal} media='(min-width: 768px)' />
          <img
            src=${worksArray[id].urlMobile}
            alt=${worksArray[id].alt}
          />
        </picture>
      </div>
      <div class='col-lg-7'>
        <p class='work-card__description'>${worksArray[id].description}</p>
      </div>
      <div class='col-lg-5'>
      <ul class='work-card__technologies my-2'>
          <li>${worksArray[id].technologies[0]}</li>
          <li>${worksArray[id].technologies[1]}</li>
          <li>${worksArray[id].technologies[2]}</li>
        </ul>
        <ul class='work-card__technologies my-2'>
          <li class="desktop">${worksArray[id].technologies[3]}</li>
          <li class="desktop">${worksArray[id].technologies[4]}</li>
          <li class="desktop">${worksArray[id].technologies[5]}</li>
        </ul>
        <hr class='text-muted'>
        <div class='btn-container d-flex'>
          <button type='button' class='col btn mx-2 fs-6'>
            <a href=${worksArray[id].live}>See live <i class='fa-solid fa-arrow-up-right-from-square'></i></a>
          </button>
          <button type='button' class='col btn mx-2'>
            <a href=${worksArray[id].source}>See source <i class='fa-brands fa-github'></i></a>
          </button>
        </div>
      </div>    
    </div>
    <div class='fixed-bottom mb-2 d-flex justify-content-center p-2'>
      <div id='black-bar'></div>
    </div>`;
  workModal.appendChild(workCard);
  const closeWorkModalBtn = document.getElementById('close-modal-btn');
  closeWorkModalBtn.addEventListener('click', closeWorkModalHandler);
};

const worksActivateLinkHandler = () => {
  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach((card, index) => {
    card.addEventListener('click', () => cardClickHandler(index));
  });
};

window.onload = () => {
  retrieveData();
  worksLoadHandler();
  worksActivateLinkHandler();
};
