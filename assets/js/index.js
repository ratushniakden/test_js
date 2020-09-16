"use strict";

const rootDiv = document.getElementById("root");
rootDiv.classList.add("redBorder");

const form = document.createElement("form");
const input = document.createElement("input");
// do not allow digits
const passwordRegex = new RegExp("(?=.*[0-9])");

rootDiv.append(form);
form.appendChild(input);

input.addEventListener("input", (event) => {
  const {
    target: { value },
  } = event;

  if (value.search(passwordRegex)) {
    rootDiv.classList.add("greenBorder");
  } else {
    rootDiv.classList.remove("greenBorder");
  }
});
