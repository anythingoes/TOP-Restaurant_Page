"use strict";

function aboutPage() {
  const content = document.createElement('main');
  content.appendChild(aboutUs());
  content.appendChild(contactUs());

  return content;
}

function aboutUs() {
  const section = document.createElement('section');
  const heading = document.createElement('h2');
  const para = document.createElement('p');

  section.append(heading, para);

  // STYLES
  heading.classList.add('sub-heading');

  // CONTENT
  heading.textContent = 'About Us';
  para.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos cum incidunt nulla odio eveniet repellat delectus iusto quibusdam dolore minus, porro illo optio ab inventore dolorem, at sit, officia placeat! Saepe autem, quaerat commodi beatae nesciunt libero at officia, aliquid ab, laborum possimus.Reiciendis dolorem aspernatur eius reprehenderit natus aut vitae rem in asperiores enim placeat, nam sequi magnam non.'


  return section;
}


function contactUs() {
  const section = document.createElement('section');
  const heading = document.createElement('h2');
  const address = document.createElement('address');

  section.append(heading, address);

  // STYLES
  section.classList.add('address');
  heading.classList.add('sub-heading');
  // address.classList.add('address');

  // CONTENT
  heading.textContent = 'Contact';
  address.innerHTML = `Contact us at:<br>
  Durbar Marg,<br>
  Kathmandu,<br>
  Nepal
  <a href="tel:+9775555555555">+977-555-555-5555</a>`;

  return section;
}

export { aboutPage };