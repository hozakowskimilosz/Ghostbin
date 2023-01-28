"use strict";

const lines = document.querySelector(".lines");
const textarea = document.querySelector("textarea");

let numberOfLines = 0;

textarea.addEventListener("keydown", (event) => {
  const paragraph = document.createElement("p");

  if (event.key === "Enter") {
    numberOfLines++;
    paragraph.textContent = numberOfLines;
    lines.appendChild(paragraph);
  }

  if (event.key === "Backspace") {
    numberOfLines--;
    paragraph.textContent = numberOfLines;
    lines.removeChild(lines.lastChild);
  }
});
