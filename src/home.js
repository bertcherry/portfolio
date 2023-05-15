import { projects, bio } from './content';
import { projectDetails } from './projects';

//Homepage generation script as module pulling from content for bio and projects overview
function bioDetails() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    
    const header = document.createElement('div');
    header.classList.add('bio-header');
    const name = document.createElement('h1');
    name.textContent = bio.myName;
    header.appendChild(name);
    const title = document.createElement('h2');
    title.textContent = bio.jobTitle;
    header.appendChild(title);
    content.appendChild(header);

    const info = document.createElement('div');
    info.classList.add('bio-info');
    const headshot = document.createElement('img');
    headshot.src = bio.headshot;
    headshot.alt = bio.headshotAlt;
    info.appendChild(headshot);
    const description = document.createElement('div');
    description.textContent = bio.description;
    info.appendChild(description);
    content.appendChild(info);

    const projectsOverview = document.createElement('div');
    projectsOverview.classList.add('projects-overview');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');

        const screenshot = document.createElement('img');
        screenshot.src = project.screenshot;
        screenshot.alt = project.screenshotAlt;
        projectDiv.appendChild(screenshot);

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');
        const title = document.createElement('h2');
        const titleLink = document.createElement('a');
        titleLink.textContent = project.title;
        titleLink.addEventListener('click', projectDetails(projects.indexOf(project)));
        title.appendChild(titleLink);
        projectInfo.appendChild(title);
        const projectSummary = document.createElement('div');
        projectSummary.textContent = project.summary;
        projectInfo.appendChild(projectSummary);
        projectDiv.appendChild(projectInfo);

        projectsOverview.appendChild(projectDiv);
    });
};

export { bioDetails };