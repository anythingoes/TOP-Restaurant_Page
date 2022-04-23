"use strict";

function menuPage() {
  const content = document.createElement('main');
  content.appendChild(menu());

  return content;
};



function menu() {
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  const menuList = ['Margherita', '4 Cheese', 'Pepperoni', 'Hawaian'];

  // STYLES
  container.classList.add('menu');
  heading.classList.add('sub-heading');

  // CONTENT
  heading.textContent = 'Menu';

  menuList.forEach(pizza => {
    const card = document.createElement('div');
    const name = document.createElement('p');
    const price = document.createElement('p');

    // STYLES
    card.classList.add('card');
    name.classList.add('card__heading');
    price.classList.add('card__price');

    // CONTENT
    price.textContent = 'Rs 500/-';
    name.textContent = pizza;

    card.append(name, price);
    container.appendChild(card);
  });

  return container;
}



export { menuPage };