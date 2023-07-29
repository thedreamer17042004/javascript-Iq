import get from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];

const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

function displayUser(person) {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is `;
  btns.forEach((btn) => btn.classList.remove("active"));
  btns[0].classList.add("active");

  btns.forEach((btn) => {
    const label = btn.dataset.label;

    // btn.dataset.title = person[label];
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is `;
      value.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
