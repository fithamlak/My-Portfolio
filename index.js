// Variables for html elements
const nav = document.querySelector("#toolbar");
const hamburgerButton = document.querySelector(".hamberger");
const closeButton = document.querySelector(".close-button");
const navItems = document.querySelector(".menu-list");
const myLogo = document.querySelector(".logo");
const popWindow = document.querySelector(".popup_card");
const pButton = document.querySelector(".project_btn");
const popup = document.querySelector("#popup");
const body = document.querySelector("body");
const header = document.querySelector("header");
const xProject = document.querySelector(".close_icon");
const center = document.querySelector(".center");
const main = document.querySelector(".main");
const footer = document.querySelector("footer");
const skillsStack = document.querySelector(".popup_skills");
const techStach = document.querySelector(".tech_stack");

// function to open mobile menu when hamberger is clicked
function openNav() {
  nav.classList.remove("toolbar");
  nav.classList.add("header-bg-color");
  hamburgerButton.classList.toggle("invisible");
  myLogo.classList.toggle("invisible");
  closeButton.classList.toggle("invisible");
  navItems.classList.toggle("invisible");
  navItems.classList.toggle("open_menu");
}
// function to close mobile menu when close icon  is clicked
function closeNav() {
  nav.classList.remove("header-bg-color");
  nav.classList.add("toolbar");
  hamburgerButton.classList.toggle("invisible");
  myLogo.classList.toggle("invisible");
  closeButton.classList.toggle("invisible");
  navItems.classList.toggle("invisible");
  navItems.classList.toggle("open_menu");
}
// add enent listners for html elements
hamburgerButton.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);
navItems.addEventListener("click", closeNav);

// array of objects with propertis and datas for accomplishments
const accomplishmentArray = [
  {
    id: 0,
    title: "Tonic",
    skill: ["Canopy", "Back End Dev", "2015"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "css", "javascript", "github", "ruby", "Bootstraps"],
    ImageForMobile: "/images/first-work.svg",
    ImageForDesktop: "/images/work1-desktop-view.svg",
    accomplishmentDetailModel: "/images/accomplishment-details-model.svg",
    alt: "work_tonic_daily_personalized_reads",
    live: "https://fithamlak.github.io/",
    source: "https://github.com/fithamlak/My-portfolio",
  },
  {
    id: 1,
    title: "Multi-Post Stories",
    skill: ["Canopy", "Back End Dev", "2015"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "css", "javascript", "github", "ruby", "Bootstraps"],
    ImageForMobile: "/images/second-work.svg",
    ImageForDesktop: "/images/work2-desktop-view.svg",
    accomplishmentDetailModel: "/images/accomplishment-details-model.svg",
    alt: "work_multi-post_stories_daily_personalized_reads",
    live: "https://fithamlak.github.io/",
    source: "https://github.com/fithamlak/My-portfolio",
  },
  {
    id: 2,
    title: "Tonic",
    skill: ["Canopy", "Back End Dev", "2015"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "css", "javascript", "github", "ruby", "Bootstraps"],
    ImageForMobile: "/images/third-work.svg",
    ImageForDesktop: "/images/work3-desktop-view.svg",
    accomplishmentDetailModel: "/images/accomplishment-details-model.svg",
    alt: "work_tonic_daily_personalized_reads",
    live: "https://fithamlak.github.io/",
    source: "https://github.com/fithamlak/My-portfolio",
  },
  {
    id: 3,
    title: "Multi-Post Stories",
    skill: ["Canopy", "Back End Dev", "2015"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "css", "javascript", "github", "ruby", "Bootstraps"],
    ImageForMobile: "/images/fourth-work.svg",
    ImageForDesktop: "/images/work4-desktop-view.svg",
    accomplishmentDetailModel: "/images/accomplishment-details-model.svg",
    alt: "work_multi-post_stories_daily_personalized_reads",
    live: "https://fithamlak.github.io/",
    source: "https://github.com/fithamlak/My-portfolio",
  },
];

// daynamic creation of accomplishments
const accomplishmentHandler = () => {
  const accomplishments = document.getElementById("works");
  accomplishmentArray.forEach((accomplishment, index) => {
    const accomplishmentCard = document.createElement("li");
    accomplishmentCard.classList.add("achomplishment-card");
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
    const pButton = accomplishmentCard.querySelector(".project_btn");
    pButton.addEventListener("click", () => {
      seeProject(index);
    });

    accomplishments.appendChild(accomplishmentCard);
  });
};
window.onload = () => {
  accomplishmentHandler();
};
// function to display details popup windo when seeProjrct buttons of each accomplishment clicked
function seeProject(k) {
  console.log("am clicked");
  const title = document.querySelector(".popup_title");
  const techStach = document.querySelector(".tech_stack");
  const popupDescription = document.querySelector(".popup_text");
  const popupImage = document.querySelector(".popup_img");
  const skillsStack = document.querySelector(".popup_skills");
  const hor = document.querySelector(".horizontal");
  const col = document.querySelector(".colum");
  const but = document.querySelector(".butt");
  const center = document.querySelector(".center");
  const main = document.querySelector(".main");
  const footer = document.querySelector("footer");

  title.innerText = accomplishmentArray[k].title;
  for (let l = 0; l < accomplishmentArray[k].skill.length; l += 1) {
    const skill = document.createElement("li");
    skill.innerText = accomplishmentArray[k].skill[l];
    skillsStack.append(skill);
  }
  let deviceSize = screen.width;
  if (deviceSize < 769) {
    popupImage.src = accomplishmentArray[k].ImageForMobile;
  } else {
    popupImage.src = accomplishmentArray[k].accomplishmentDetailModel;
  }
  popupDescription.innerText = accomplishmentArray[k].description;

  for (let l = 0; l < accomplishmentArray[k].technologies.length; l += 1) {
    const tech = document.createElement("li");
    tech.innerText = accomplishmentArray[k].technologies[l];
    if (techStach.children.length <= 5);
    {
      techStach.append(tech);
    }
  }
  techStach.append("");
  col.append(techStach);
  col.append(but);
  hor.append(popupDescription);
  hor.append(col);
  popWindow.classList.toggle("invisble");
  // popup.classList.add('blured')
  body.style.background = "#c1c7d0";
  header.style.background = "#c1c7d0";
  header.classList.add("hide");

  // body.style.overflowY = "hidden";
  center.style.display = "flex";
  main.classList.add("hide");
  footer.classList.add("hide");
  xProject.style.display = "block";
}

// Function to close details popup windo when close icon is clicked
function closeProject() {
  popWindow.classList.toggle("invisble");
  skillsStack.innerHTML = "";
  techStach.innerHTML = "";
  body.style.background = "#fff";
  header.style.background = "#fff";
  header.classList.remove("hide");
  body.classList.remove("hide");
  center.style.display = "none";
  main.classList.remove("hide");
  footer.classList.remove("hide");
}

xProject.addEventListener("click", closeProject);
