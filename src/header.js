export default function header() {
  const headerEl = document.createElement("header");
  const mainHeading = document.createElement("h1");
  const nav = document.createElement("nav");
  const uList = document.createElement("ul");
  const tabs = ["Home", "Menu", "About"];

  mainHeading.textContent = "Peco's Restaurant";

  for (let i = 0; i < tabs.length; i += 1) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = tabs[i];
    link.setAttribute("href", "#");

    listItem.appendChild(link);
    uList.appendChild(listItem);
  }

  nav.appendChild(uList);

  headerEl.appendChild(mainHeading);
  headerEl.appendChild(nav);

  return headerEl;
}
