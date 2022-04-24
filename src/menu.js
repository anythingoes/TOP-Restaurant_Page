function menuItemCard(name, imgURL) {
  const card = document.createElement("div");
  const itemName = document.createElement("p");
  const itemPrice = document.createElement("p");
  const itemImg = document.createElement("img");

  // STYLES
  card.classList.add("card");
  itemName.classList.add("card__heading");
  itemPrice.classList.add("card__price");
  itemImg.classList.add("card__img");

  // CONTENT
  itemName.textContent = name;
  itemPrice.textContent = "Rs 500/-";

  // Attributes
  itemImg.setAttribute("src", imgURL);
  itemImg.setAttribute("alt", `${itemName} pizza`);

  card.append(itemName, itemPrice, itemImg);

  return card;
}

function menu() {
  const container = document.createElement("div");
  const heading = document.createElement("h2");
  const menuList = [
    {
      name: "Margherita",
      url: "../src/img/menu-card.jpg",
    },
    {
      name: "4 Cheese",
      url: "../src/img/menu-card.jpg",
    },
    {
      name: "Pepperoni",
      url: "../src/img/menu-card.jpg",
    },
    {
      name: "Hawaian",
      url: "../src/img/menu-card.jpg",
    },
  ];

  // STYLES
  container.classList.add("menu");
  heading.classList.add("sub-heading");

  // CONTENT
  heading.textContent = "Menu";

  menuList.forEach((pizza) => {
    container.appendChild(menuItemCard(pizza.name, pizza.url));
  });

  return container;
}

export default function menuPage() {
  const content = document.createElement("main");
  content.appendChild(menu());

  return content;
}
