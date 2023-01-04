const nav = document.querySelector('#toolbar');
const hamburgerButton = document.querySelector('.hamberger');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.menu-list');
const myLogo = document.querySelector('.logo');
const popWindow = document.querySelector('.popup_card');
const pButton = document.querySelector('.project_btn');

// const preventDefaultHandler = (e) => {
//   e.preventDefault();
// };
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
function seeProject(k) {
  const title = document.querySelector('.popup_title');
  const techStach = document.querySelector('.tech_stack');
  const popupDescription = document.querySelector('.popup_text');
  const popupImage = document.querySelector('.popup_img');
  const skillsStack = document.querySelector('.popup_skills');

  title.innerText = accomplishmentArray[k].title;
  for (let l = 0; accomplishmentArray[k].skill.length; l += 1) {
    const skill = document.createElement('li');
    skill.innerText = accomplishmentArray[k].skill[l];
    skillsStack.append(skill);
  }
  popupImage.src = accomplishmentArray[k].accomplishmentDetailModel;
  popupDescription.innerText = accomplishmentArray[k].description;

  for (let l = 0; accomplishmentArray[k].technologies.length; l += 1) {
    const tech = document.createElement('li');
    tech.innerText = accomplishmentArray[k].technologies[l];
    techStach.append(tech);
  }
  popWindow.classList.toggle('invisible');

  console.log('listened');
}
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
          <button class='project_btn'>
          See Project
         </button>
       </div>
      </div>`;
      const pButton = accomplishmentCard.querySelector('.project_btn');
       pButton.addEventListener('click', () =>  {
        seeProject(index);
        console.log('button');
        console.log(index);
      });
      
    accomplishments.appendChild(accomplishmentCard);
  });
};
window.onload = () => {
  accomplishmentHandler();
};



// const projectButtons = document.querySelectorAll('.project_btn');
// console.log(pButton);
// for (let k = 0; k < projectButtons.length; k += 1) {
//   projectButtons[k].addEventListener('click', () => seeProject(k));
// }
