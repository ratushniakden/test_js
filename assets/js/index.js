"use strict";

const rootDiv = document.getElementById("root");

rootDiv.classList.add("divTest");

const form = document.createElement("form");
const input = document.createElement("input");
// do not allow digits
const passwordRegex = new RegExp("(?=.*[0-9])");

rootDiv.append(form);
form.appendChild(input);

input.addEventListener("input", (event) => {
  let str = event.target.value;
  if (str.search(passwordRegex)) {
    rootDiv.setAttribute("class", "divTest2");
  } else {
    rootDiv.setAttribute("class", "divTest");
  }
});
