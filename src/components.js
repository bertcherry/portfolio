import { bio } from './content';

function bioHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.classList.add('bio-header');
    const name = document.createElement('h1');
    name.textContent = bio.myName;
    header.appendChild(name);
    const title = document.createElement('h2');
    title.textContent = bio.jobTitle;
    header.appendChild(title);
    content.appendChild(header);
};

function bioInfo() {
    const content = document.getElementById('content');
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
}

export { bioHeader, bioInfo };