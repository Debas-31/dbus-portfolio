// The project section

const projectsContainer = document.querySelector('.projects-container');
const popupProject = document.querySelector('.popup-project');
const overlayDiv = document.querySelector('.overlay');

const projects = [
  {
    id: 0,
    title: 'Rails Budget App',
    picture: 'image/project/budgetApp.png',
    modalPicture: 'image/project/budgetApp.png',
    description: "A mobile web application where users can manage their budget; they can have a list of transactions associated with a category to see how much money they spent and on what item.",
    technologies: ['html', 'css', 'ruby', 'ruby on rails', 'tailwind-css'],
    liveLink: 'https://serene-ocean-56296.herokuapp.com/',
    codeLink: 'https://github.com/Debas-31/rails-budget-app',

  },
  {
    id: 1,
    title: 'Covid-19 Metrics',
    picture: 'image/project/coronaVirus.png',
    modalPicture: 'image/project/coronaVirus.png',
    description: 'A web application that checks a list of metrics created the data fetched from a COVID-19 API for countries in North America. This project applies best practices using React/Redux library and is fully responsive.',
    technologies: ['html', 'css', 'javaScript', 'React'],
    liveLink: 'https://covid-19-metrics-webapp.netlify.app/',
    codeLink: 'https://github.com/Debas-31/metrics-webapp',
  },
  {
    id: 2,
    title: 'Math Magicians',
    picture: 'image/project/mathMagician.png',
    modalPicture: 'image/project/mathMagician.png',
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    technologies: ['html', 'css', 'javaScript', 'React'],
    liveLink: 'https://math-react-app.netlify.app/',
    codeLink: 'https://github.com/Debas-31/math-magicians',
  },
  {
    id: 3,
    title: 'Book Store',
    picture: 'image/project/bookStore.png',
    modalPicture: 'image/project/bookStore.png',
    description: 'A website that contains Books and Categories pages. This project was initialized with components, you can add and remove books and also fetch data from the provided API.',
    technologies: ['html', 'css', 'javaScript', 'webpack'],
    liveLink: 'https://book-store-here.netlify.app/',
    codeLink: 'https://github.com/Debas-31/book-store',
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
