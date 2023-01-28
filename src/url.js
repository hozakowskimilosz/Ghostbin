"use strict";

const characters = "abcdefghijklmnopqrstuwxyz0123456789";

const url = [];
for (let i = 0; i < 4; i++) {
  url.push(characters[Math.trunc(Math.random() * characters.length)]);
}

console.log(...url);
