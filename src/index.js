import { generateBio } from './about';
import { generateHome } from './home';

window.onload = () => {
    const navHome = document.getElementById('nav-home');
    navHome.addEventListener('click', generateHome);

    const navAbout = document.getElementById('nav-about');
    navAbout.addEventListener('click', generateBio);

    generateHome();
}