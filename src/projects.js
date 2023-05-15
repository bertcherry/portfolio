import { projects } from './content';

//Generate project pages from project content in content.js
function projectDetails(projectId) {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    const project = projects.at(projectId);
    
    const title = document.createElement('h1');
    title.classList.add('project-title');
    if (project.titleLink != undefined) {
        const titleLink = document.createElement('a');
        titleLink.href = project.titleLink;
        titleLink.textContent = project.title;
        title.appendChild(titleLink);
    } else {
        title.textContent = project.title;
    }
    content.appendChild(title);

    const screenshot = document.createElement('img');
    screenshot.classList.add('project-screenshot');
    screenshot.src = project.screenshot;
    screenshot.alt = project.screenshotAlt;
    content.appendChild(screenshot);

    const summary = document.createElement('div');
    summary.classList.add('project-section');
    summary.classList.add('project-summary');
    const summaryTitle = document.createElement('h2');
    summaryTitle.textContent = 'Project Summary';
    summary.appendChild(summaryTitle);
    const projectSummary = document.createElement('div');
    projectSummary.textContent = project.summary;
    summary.appendChild(projectSummary);
    content.appendChild(summary);

    const audience = document.createElement('div');
    audience.classList.add('project-section');
    audience.classList.add('project-audience');
    const audienceTitle = document.createElement('h2');
    audienceTitle.textContent = 'Audience';
    audience.appendChild(audienceTitle);
    const projectAudience = document.createElement('div');
    projectAudience.textContent = project.audience;
    audience.appendChild(projectAudience);
    content.appendChild(audience);

    const details = document.createElement('div');
    details.classList.add('project-section');
    details.classList.add('project-details');
    const detailsTitle = document.createElement('h2');
    detailsTitle.textContent = 'Details';
    details.appendChild(detailsTitle);
    const projectDetails = document.createElement('div');
    projectDetails.textContent = project.details;
    details.appendChild(projectDetails);
    content.appendChild(details);
};

export { projectDetails };