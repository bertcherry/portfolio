import { generateHome } from './home';
import { projectDetails } from './projects';

const navHome = document.getElementById('nav-home');
navHome.addEventListener('click', generateHome);

generateHome();