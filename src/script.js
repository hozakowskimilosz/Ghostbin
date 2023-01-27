const chars = "abcdefghijklmnopqrstuwxyz0123456789";

const url = [];
for (let i = 0; i < 4; i++) {
  url.push(chars[Math.trunc(Math.random() * chars.length)]);
}

console.log(...url);
