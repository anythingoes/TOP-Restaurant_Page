function ledeDiv() {
  const section = document.createElement('section');
  const para = document.createElement('p');

  section.id = 'lede';
  section.classList.add('lede');
  para.classList.add('lede__text');

  para.innerHTML = 'Come for the best Pizza!<br>Stay for the best Pizza! <br>Eat the best Pizza!<br>Dream about Pizza!';

  section.appendChild(para);
  return section;
}

function timingsDiv() {
  const section = document.createElement('section');
  const heading = document.createElement('h2');
  const para = document.createElement('p');

  section.id = 'timings';
  section.classList.add('timings');
  heading.classList.add('sub-heading');

  heading.textContent = 'Hours';
  para.innerHTML = 'Sunday: 1 PM - 11 PM<br>Monday: 1 PM - 11 PM<br>Tuesday: 1 PM - 11 PM<br>Wednesday: 1 PM - 11 PM<br>Thursday: 1 PM - 11 PM<br>Friday: 1 PM - 11 PM<br>Saturday: 1 PM - 11 PM';

  section.append(heading, para);
  return section;
}

export default function home() {
  const content = document.createElement('main');
  content.append(ledeDiv(), timingsDiv());

  return content;
}
