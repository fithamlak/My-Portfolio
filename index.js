const nav = document.querySelector('#toolbar');
const hamburgerButton = document.querySelector('.hamberger');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.menu-list');
const myLogo = document.querySelector('.logo');
const accomplishmentModel = document.getElementById('accomplishment-details-model');

const preventDefaultHandler = (e) => {
  e.preventDefault();
};
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

const accomplishmentArray = [
  {
    id: 0,
    title: 'Tonic',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: '/images/first-work.svg',
    ImageForDesktop: '/images/work1-desktop-view.svg',
    accomplishmentDetailModel: '/images/accomplishment-details-model.svg',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://fithamlak.github.io/',
    source: 'https://github.com/fithamlak/My-portfolio',
  },
  {
    id: 1,
    title: 'Multi-Post Stories',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: '/images/second-work.svg',
    ImageForDesktop: '/images/work2-desktop-view.svg',
    accomplishmentDetailModel: '/images/accomplishment-details-model.svg',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://fithamlak.github.io/',
    source: 'https://github.com/fithamlak/My-portfolio',
  },
  {
    id: 2,
    title: 'Tonic',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: '/images/third-work.svg',
    ImageForDesktop: '/images/work3-desktop-view.svg',
    accomplishmentDetailModel: '/images/accomplishment-details-model.svg',
    alt: 'work_tonic_daily_personalized_reads',
    live: 'https://fithamlak.github.io/',
    source: 'https://github.com/fithamlak/My-portfolio',
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: '/images/fourth-work.svg',
    ImageForDesktop: '/images/work4-desktop-view.svg',
    accomplishmentDetailModel: '/images/accomplishment-details-model.svg',
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://fithamlak.github.io/',
    source: 'https://github.com/fithamlak/My-portfolio',
  },
];

const accomplishmentHandler = () => {
  const accomplishments = document.getElementById('works-container');
  accomplishmentArray.forEach((accomplishment) => {
    const accomplishmentCard = document.createElement('div');
    accomplishmentCard.classList.add('achomplishment-card');
    if (((accomplishment.id % 2 === 0) && (window.matchMedia('screen and (min-width:768px) and (max-width:1440px)').matches)) || (window.matchMedia('screen and (min-width:320px) and (max-width:768px)').matches)) {
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
          <button type='button' class='btn'>
          <a href='#'>See Project</a>
         </button>
       </div>
      </div>
    `; } else {
      accomplishmentCard.innerHTML = `
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
          <button type='button' class='btn'>
          <a href='#'>See Project</a>
         </button>
       </div>
      </div>
      <div class='image-container'>
        <img  class='desktop-view'
          src=${accomplishment.ImageForDesktop}
          alt=${accomplishment.alt}
        />
        <img class='mobile-view'
          src=${accomplishment.ImageForMobile}
        />
      </div>
      
    `;
    }
    accomplishments.appendChild(accomplishmentCard);
  });
};

const closeAccomplishmentsModelHandler = () => {
  // accomplishmentModel.classList.replace('d-flex', 'd-none');
  // accomplishmentModel.innerHTML = '';
  // document.body.classList.remove('stop-scrolling');
  // document.body.removeEventListener('touchmove', preventDefaultHandler);
};

const accomplishmentcardClickHandler = (id) => {
  accomplishmentModel.classList.add('accomplishment-detail');
  document.body.classList.add('stop-scrolling');
  document.body.addEventListener('touchmove', preventDefaultHandler);
  const accomplishmentDetail = document.createElement('div');
  accomplishmentDetail.classList.add('accomplishment-detail');
  accomplishmentDetail.innerHTML = `
    <div class='top-container'>
      <div clas = 'titlle-and-skill'>
        <h2>${accomplishmentArray[id].title}</h2     
         <ul>
          <li>${accomplishmentArray[id].skill[0]}</li>
          <li>&#x2022;</li>
          <li>${accomplishmentArray[id].skill[1]}</li>
          <li>&#x2022;</li>
          <li>${accomplishmentArray[id].skill[2]}</li>
        </ul> 
      </div>
    <div class= 'close'>
      <i class='fa-solid fa-x'></i>
    </div> git 
      <div>
        <div class='image-container'>
          <source srcset=${accomplishmentArray[id].accomplishmentDetailModel} media='(min-width: 768px)' />
          <img
            src=${accomplishmentArray[id].ImageForMobile}
            alt=${accomplishmentArray[id].alt}
          />
        </div>
      </div>
      <div'>
        <p>${accomplishmentArray[id].description}</p>
      </div>
      <div'>
      <ul'>
          <li>${accomplishmentArray[id].technologies[0]}</li>
          <li>${accomplishmentArray[id].technologies[1]}</li>
          <li>${accomplishmentArray[id].technologies[2]}</li>
        </ul>
        <ul'>
          <li class='desktop'>${accomplishmentArray[id].technologies[3]}</li>
          <li class="desktop">${accomplishmentArray[id].technologies[4]}</li>
          <li class="desktop">${accomplishmentArray[id].technologies[5]}</li>
        </ul>
        <hr class='text-muted'>
        <div>
          <button type='button'>
            <a href=${accomplishmentArray[id].live}>See live <i class='fa-solid fa-arrow-up-right-from-square'></i></a>
          </button>
          <button type='button'>
            <a href=${accomplishmentArray[id].source}>See source <i class='fa-brands fa-github'></i></a>
          </button>
        </div>
      </div>    
    </div>
    <div class='fixed-bottom mb-2 d-flex justify-content-center p-2'>
      <div id='black-bar'></div>
    </div>`;
  accomplishmentModel.appendChild(accomplishmentDetail);
  const closeAcomplishmentModelBtn = document.getElementById('close-model-btn');
  closeAcomplishmentModelBtn.addEventListener('click', closeAccomplishmentsModelHandler);
};

const accomplishmentsActivateLinkHandler = () => {
  const accomplishmentCards = document.querySelectorAll('.achomplishment-card');
  accomplishmentCards.forEach((card, index) => {
    card.addEventListener('click', () => accomplishmentcardClickHandler(index));
  });
};

window.onload = () => {
  accomplishmentHandler();
  accomplishmentsActivateLinkHandler();
};