// The project section

const projectsContainer = document.querySelector('.projects-container');
const popupProject = document.querySelector('.popup-project');
const overlayDiv = document.querySelector('.overlay');

const projects = [
  {
    id: 0,
    title: 'Expo Book Fair',
    picture: 'image/project/screenShot-capston-1.png',
    modalPicture: 'image/project/screenShot-capston-1.png',
    description: "This project focuses on different topics of the Microverse curriculum in the first module, including HTML, CSS, js, how to implement DOM using javascript functions and methods, and various tools and technologies.",
    technologies: ['html', 'css', 'js', 'bootstrap'],
    liveLink: 'https://debas-31.github.io/dbus-first-capstone/',
    codeLink: 'https://github.com/Debas-31/dbus-first-capstone',

  },
  {
    id: 1,
    title: 'Awesome Book',
    picture: 'image/project/screenShot-awesomBook.png',
    modalPicture: 'image/project/screenShot-awesomBook.png',
    description: "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list. In order to achieve this project we rewrote some of our function definitions into class expressions to apply JavaScript best practices and styling the core elements.",
    technologies: ['html', 'node.js', 'bootstrap', 'sass'],
    liveLink: 'https://debas-31.github.io/awesomebooks/',
    codeLink: 'https://github.com/Debas-31/awesomebooks',
  },
  {
    id: 2,
    title: 'Facebook 360',
    picture: 'image/Img-Placeholder.png',
    modalPicture: 'image/Img-Placeholder-Desktop.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,..",
    technologies: ['html', 'node.js', 'bootstrap', 'sass'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Uber Navigation',
    picture: 'image/Img-Placeholder.png',
    modalPicture: 'image/Img-Placeholder-Desktop.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,...",
    technologies: ['html', 'node.js', 'bootstrap', 'sass'],
    liveLink: '#',
    codeLink: '#',
  },
];

// Display a functions

const renderTechnologies = (techArr) => {
  let technologiesHtml = "<ul class='technologies-used'>";
  techArr.forEach((tech, index) => {
    technologiesHtml += `<li class='technology'>${tech}</li>`;
    if (index !== (techArr.length - 1)) {
      technologiesHtml += "<li class='separator'><img src='image/vertical-image.png' alt='Line separing the technologies used in a project'></li>";
    }
  });
  technologiesHtml += '</ul>';
  return technologiesHtml;
};
const renderTechnologiesForModal = (techArr) => {
  let technologiesHtml = "<ul class='technologies-used'>";
  techArr.forEach((tech, index) => {
    if (index === 0) {
      technologiesHtml += "<li class='separator'><img src='image/vertical-image.png' alt='Line separing the technologies used in a project'></li>";
    }
    technologiesHtml += `<li class='technology'>${tech}</li>`;
    technologiesHtml += "<li class='separator'><img src='image/vertical-image.png' alt='Line separing the technologies used in a project'></li>";
  });
  technologiesHtml += '</ul>';
  return technologiesHtml;
};

const renderSingleProject = (p) => {
  const projectHtml = `<div class='project'>
         <div class='screenshot-container'>
           <img src='${p.picture}' alt='Screenshot of the project named ${p.title}'
              class='screenshot'>
         </div>
         <div class='project-rest'>
          <h3 class='project-title'>${p.title}</h3>
          <div class='project-description'>
              <p>${p.description}</p>
          </div>
          ${renderTechnologies(p.technologies)}
          <button class='project-details-btn' type='button' data-project-id='${p.id}'>See Project</button>
      </div>
  </div>
      `;
  return projectHtml;
};
// Display projects dynamically in the HTML document
projectsContainer.innerHTML = projects.map((p) => renderSingleProject(p)).join('');

// Click event listener to projects buttons;
const projectDetailsBtns = document.querySelectorAll('.project-details-btn');

projectDetailsBtns.forEach((pdb) => {
  pdb.addEventListener('click', (event) => {
    const projectId = Number(event.target.getAttribute('data-project-id'));
    const projectToShow = projects.find((p) => p.id === projectId);

    popupProject.querySelector('.popup-title').textContent = projectToShow.title;
    popupProject.querySelector('.popup-image').src = projectToShow.modalPicture;
    popupProject.querySelectorAll('.popup-image').alt = `Image showing a preview of the project named ${projectToShow.title}`;
    popupProject.querySelector('.popup-long-description').textContent = projectToShow.description;
    popupProject.querySelector('.popup-technologies').innerHTML = renderTechnologiesForModal(projectToShow.technologies);
    popupProject.querySelector('.live-demo-btn').href = projectToShow.liveLink;
    popupProject.querySelector('.source-code-btn').href = projectToShow.codeLink;

    overlayDiv.style.display = 'block';
    popupProject.style.visibility = 'visible';
    popupProject.style.display = 'block';
    popupProject.style.opacity = 1;

    // Popup close
    const popupClose = document.querySelector('.popup-close');
    popupClose.addEventListener('click', () => {
      popupProject.style.opacity = 0;
      popupProject.style.visibility = 'hidden';
      overlayDiv.style.display = 'none';
    });
  });
});