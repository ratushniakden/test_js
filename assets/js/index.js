"use strict";

const rootDiv = document.getElementById("root");

rootDiv.classList.add("divTest");

// rootDiv.addEventListener("click", () => {
//   //   if (rootDiv.classList.contains("divTest")) {
//   //     rootDiv.classList.replace("divTest", "divTest2");
//   //   } else if (rootDiv.classList.contains("divTest2")) {
//   //     rootDiv.classList.replace("divTest2", "divTest");
//   //   }
//   rootDiv.classList.toggle("divTest");
//   rootDiv.classList.toggle("divTest2");
// });

//Task 1

const newDiv = document.createElement("div");
const form = document.createElement("form");
const input = document.createElement("input");
const submit = document.createElement("input");
submit.setAttribute("type", "submit");
const ul = document.createElement("ul");
const li = document.createElement("li");
const deleteButton = document.createElement("button");
deleteButton.textContent = "delete";

rootDiv.append(newDiv, form, ul);
form.appendChild(input);
form.appendChild(submit);
ul.appendChild(li);
li.appendChild(deleteButton);

input.addEventListener("input", (event) => {
  newDiv.textContent = event.target.value;
});

//Task 2

submit.addEventListener("click", () => {
  if (newDiv.textContent.split(" ").length > 3) {
    console.log(newDiv.textContent);
  } else {
    console.error("Your input is less then 3 words!");
  }
});

//Task 3

input.addEventListener("input", (event) => {
  const test = newDiv.textContent.split(" ").filter(Boolean);
});

input.addEventListener("input", (event) => {
  li.textContent = event.target.value;
});

deleteButton.onclick = function () {
  deleteButton.parentElement.remove();
};
