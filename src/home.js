import { bioHeader, bioInfo } from './components';
import { projects } from './content';
import { projectDetails } from './projects';

//Homepage generation script as module pulling from content for bio and projects overview
function generateHome() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    
    bioHeader();
    bioInfo();

    const projectsOverview = document.createElement('div');
    projectsOverview.classList.add('projects-overview');
    const projectsTitle = document.createElement('h2');
    projectsTitle.textContent = 'Projects';
    projectsOverview.appendChild(projectsTitle);
    projects.forEach(project => {
        const projectId = projects.indexOf(project);
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-container');

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');
        const title = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.id = projectId;
        titleLink.textContent = project.title;
        titleLink.addEventListener('click', projectDetails);
        title.appendChild(titleLink);
        projectInfo.appendChild(title);
        const projectSummary = document.createElement('div');
        projectSummary.textContent = project.summary;
        projectInfo.appendChild(projectSummary);
        projectDiv.appendChild(projectInfo);

        const screenshotCont = document.createElement('a');
        screenshotCont.id = projectId;
        screenshotCont.addEventListener('click', projectDetails);
        screenshotCont.classList.add('img-container');
        const screenshot = document.createElement('img');
        screenshot.src = project.screenshot;
        screenshot.alt = project.screenshotAlt;
        screenshotCont.appendChild(screenshot);
        projectDiv.appendChild(screenshotCont);

        projectsOverview.appendChild(projectDiv);
    });
    content.appendChild(projectsOverview);
};

export { generateHome };