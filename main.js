const humberger = document.querySelector('.humberger');
const sideBar = document.querySelector('.sideBar');
const sideBarExit = document.querySelector('.sideBar-exit');
const sideBarLink = document.querySelector('.sideBar-link');


function openSidebar() {
    sideBar.classList.add('showSideBar');
}

humberger.addEventListener('click', openSidebar);

function closeSidebar () {
    sideBar.classList.remove('showSideBar');
}

sideBarExit.addEventListener('click', closeSidebar);
sideBarLink.addEventListener('click', closeSidebar);