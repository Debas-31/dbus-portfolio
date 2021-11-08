const humberger = document.querySelector('.humberger');
const sideBar = document.querySelector('.sideBar');
const sideBarExit = document.querySelector('.sideBar-exit');

function openSidebar() {
    // sideBar.style.display = 'visible';
    sideBar.classList.add('showSideBar');
}

humberger.addEventListener('click', openSidebar);

function closeSidebar () {
    // sideBar.style.display = 'hidden';
    sideBar.classList.remove('showSideBar');
}

sideBarExit.addEventListener('click', closeSidebar)