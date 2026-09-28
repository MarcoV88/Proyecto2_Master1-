console.log(document.querySelector(".showme"));

console.log(document.querySelector("#pillado"));

document.querySelectorAll("p").forEach(p => console.log(p));

document.querySelectorAll(".pokemon").forEach(el => console.log(el));

document.querySelectorAll('[data-function="testMe"]').forEach(el => console.log(el));

console.log(document.querySelector('span[data-function="testMe"]:nth-of-type(3)'));