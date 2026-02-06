import { getHeader } from '/frontend/components/header.js';
import { isLogged } from '/frontend/assets/js/services/api.js'

document.addEventListener('DOMContentLoaded', await setLayout())

async function setLayout() {
    // *********************** Insert components
    // Set styles
    const head = document.head;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/frontend/assets/css/layout.css';
    head.appendChild(link);

    // Set header
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = getHeader();


    // *********************** Mange content on auth status
    const logged = await isLogged()
    const authBtn = document.getElementById('authBtn')

    const textElem = authBtn.querySelector('span')
    let redirect_url
    if (logged) {
        textElem.innerText = "My Profile"
        redirect_url = "/frontend/pages/myProfile.html"
    } else {
        textElem.innerText = "Log in"
        redirect_url = "/frontend/pages/login.html"
    }

    authBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = redirect_url
    })
}