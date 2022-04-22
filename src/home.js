"use strict";

function header() {
  const header = document.createElement('header');
  const mainHeading = document.createElement('h1');
  const nav = document.createElement('nav');
  const uList = document.createElement('ul');
  const tabs = ['Home', 'Menu', 'About'];

  mainHeading.textContent = "Peco's Restaurant";

  for (let i = 0; i < 3; i++) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = tabs[i];
    link.setAttribute('href', '#');

    listItem.appendChild(link);
    uList.appendChild(listItem);
  }

  nav.appendChild(uList);

  header.appendChild(mainHeading);
  header.appendChild(nav);

  return header;
}

function main() {
  const section = document.createElement('section');
  const para = document.createElement('p');

  para.innerHTML = "<p> Come for the best Pizza!<br>Stay for the best Pizza! <br>Eat the best Pizza!<br>Dream about Pizza!</p>";

  section.appendChild(para);

  section.style.display = 'none';
  return section;
}

export {
  header,
  main,
};