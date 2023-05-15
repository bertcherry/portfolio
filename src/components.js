import { bio } from './content';

function bioHeader() {
    const header = document.createElement('div');
    header.classList.add('bio-header');
    const name = document.createElement('h1');
    name.textContent = bio.myName;
    header.appendChild(name);
    const title = document.createElement('h2');
    title.textContent = bio.jobTitle;
    header.appendChild(title);
    return header;
};

function bioInfo() {
    const info = document.createElement('div');
    info.classList.add('bio-info');
    const headshot = document.createElement('img');
    headshot.src = bio.headshot;
    headshot.alt = bio.headshotAlt;
    info.appendChild(headshot);
    const description = document.createElement('div');
    description.textContent = bio.description;
    info.appendChild(description);
    return info;
}

export { bioHeader, bioInfo };