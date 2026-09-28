const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

const divWithP = document.createElement("div");
const pInsideDiv = document.createElement("p");
pInsideDiv.textContent = "Estoy dentro de un div";
divWithP.appendChild(pInsideDiv);
document.body.appendChild(divWithP);

const divWithSixP = document.createElement("div");
for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo ${i + 1}`;
    divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

const dynamicP = document.createElement("p");
dynamicP.textContent = "Soy dinámico!";
document.body.appendChild(dynamicP);

document.querySelector("h2.fn-insert-here").textContent = "Wubba Lubba dub dub";

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const appsList = document.createElement("ul");
for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    appsList.appendChild(li);
}
document.body.appendChild(appsList);

document.querySelectorAll(".fn-remove-me").forEach(el => el.remove());

const pBetween = document.createElement("p");
pBetween.textContent = "Voy en medio!";
document.querySelector("#divDos").before(pBetween);

document.querySelectorAll("div.fn-insert-here").forEach(div => {
    const p = document.createElement("p");
    p.textContent = "Voy dentro!";
    div.appendChild(p);
});