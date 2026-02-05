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
    const authLink = document.getElementById('header__profile__title')
    if (!logged) {
        authLink.href = "/frontend/pages/login.html"
        authLink.innerText = "Log in"
    } else {
        authLink.href = "/frontend/pages/myProfile.html"
        authLink.innerText = "My profile"
    }
}