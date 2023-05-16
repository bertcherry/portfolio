import { bioHeader, bioInfo } from './components';
import { bio } from './content';

//Generate bio details from content bio object
function generateBio() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    bioHeader();
    bioInfo();

    const bioTools = document.createElement('div');
    const toolsTitle = document.createElement('h2');
    bioTools.appendChild(toolsTitle);
    toolsTitle.textContent = 'Tools';
    const toolsList = document.createElement('ul');
    toolsList.classList.add('bio-list');
    for (const tool in bio.tools) {
        const toolItem = document.createElement('li');
        toolsList.appendChild(toolItem);
    }
    bioTools.appendChild(toolsList);
    content.appendChild(bioTools);

    const resume = document.createElement('div');
    const resumeLink = document.createElement('a');
    resumeLink.classList.add('btn-resume');
    resumeLink.textContent = 'View Resume';
    resumeLink.href = bio.resume;
    resume.appendChild(resumeLink);
    content.appendChild(resume);
};

export { generateBio };