const humberger = document.querySelector('.humberger');
const sideBar = document.querySelector('.sideBar');
const sideBarExit = document.querySelector('.sideBar-exit');
const sideBarLink = document.querySelector('.sideBar-link');
const about = document.getElementById('about-link');
const contact = document.getElementById('contact-link');

function openSidebar() {
  sideBar.classList.add('showSideBar');
}

humberger.addEventListener('click', openSidebar);

function closeSidebar() {
  sideBar.classList.remove('showSideBar');
}

sideBarExit.addEventListener('click', closeSidebar);
sideBarLink.addEventListener('click', closeSidebar);
about.addEventListener('click', closeSidebar);
contact.addEventListener('click', closeSidebar);