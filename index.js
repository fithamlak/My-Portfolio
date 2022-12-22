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

const accomplishmentArray = [
  {
    id: 0,
    title: 'Tonic',
    skill: ['Canopy', 'Back End Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    ImageForMobile: '/images/first-work.svg',
    ImageForDesktop: '/images/work1-desktop-view.svg',
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
    alt: 'work_multi-post_stories_daily_personalized_reads',
    live: 'https://fithamlak.github.io/',
    source: 'https://github.com/fithamlak/My-portfolio',
  },
];

const accomplishmentHandler = () => {
  const accomplishments = document.getElementById('works-container')
  accomplishmentArray.forEach((accomplishment) => {
    const accomplishmentCard = document.createElement('div');
    accomplishmentCard.classList.add('achomplishment-card');
    accomplishmentCard.innerHTML = `
      <div class='image-container'>
        <img  class='desktop-view'
          src=${accomplishmentCard.ImageForDesktop}
          alt=${accomplishmentCard.alt}
        />
        <img class='mobile-view'
          src=${accomplishmentCard.ImageForMobile}
        />
      </div>
      <div class='content-container'>
        <h2>${accomplishmentCard.title}</h2>
        <ul class='skill'>
          <li>${accomplishmentCard.skill[0]}</li>
          <li>&#x2022;</li>
          <li>${accomplishmentCard.skill[1]}</li>
          <li>&#x2022;</li>
          <li>${accomplishmentCard.skill[2]}</li>
        </ul>
        <p>${accomplishmentCard.description}</p>  
        <ul class='technologies'>
          <li>${accomplishmentCard.technologies[0]}</li>
          <li>${accomplishmentCard.technologies[1]}</li>
          <li>${accomplishmentCard.technologies[2]}</li>
        </ul>
        <div id='button-container'>
          <button type='button' class='btn'>
          <a href='#'>See Project</a>
         </button>
       </div>
      </div>
    `;
    accomplishments.appendChild(accomplishmentCard);
  });
};