import { header, main } from './home.js';

console.log('I am ready to run');

const container = document.querySelector('#content');
const mainElement = document.createElement('main');

container.appendChild(header());
container.appendChild(mainElement);
mainElement.appendChild(main());

const linkList = document.querySelectorAll('li');

const homeBtn = linkList[0];
const menuBtn = linkList[1];
const aboutBtn = linkList[2];

// homeBtn.addEventListener('click', () => );

// mainElement.appendChild(main());

