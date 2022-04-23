import { header } from './header.js';
import { home } from './home.js';
import { aboutPage } from './about.js';
import { menuPage } from './menu.js';
import './style.css';

console.log('Running');

const body = document.body;

// HEADER element is present on every page
body.appendChild(header());

// Default view is the home page
body.appendChild(home());

// NAV menu eventListener;
const linkList = document.querySelectorAll('li');
linkList.forEach(tab => {
  tab.addEventListener('click', changeTabContent);
});



function changeTabContent(e) {
  clearMainContent();

  const clickedTab = e.target.textContent;

  switch (clickedTab) {
    case 'Menu':
      body.append(menuPage());
      break;
    case 'About':
      body.append(aboutPage());
      break;
    default:
      body.append(home());
  }
}

function clearMainContent() {
  const main = document.querySelector('main');
  if (main) body.removeChild(main);
}


// When any tab button is pressed, clear MAIN element, then append respective child elements


// On page load, display home page content and select home page tab
// When another tab is clicked, clear <main> element before adding content for that page

