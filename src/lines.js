"use strict";

const lines = document.querySelector(".lines");
const textarea = document.querySelector("textarea");

let numberOfLines = 1;

textarea.addEventListener("keydown", (event) => {
  const paragraph = document.createElement("p");

  if (event.key === "Enter") {
    numberOfLines++;
    paragraph.textContent = numberOfLines;
    lines.appendChild(paragraph);
  }

  if (event.key === "Backspace") {
    if (numberOfLines !== 1) {
      numberOfLines--;
      paragraph.textContent = numberOfLines;
      lines.removeChild(lines.lastChild);
    }
  }
});
