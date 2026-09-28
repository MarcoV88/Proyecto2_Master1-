const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const countriesList = document.createElement("ul");
for (const country of countries) {
    const li = document.createElement("li");
    li.textContent = country;
    countriesList.appendChild(li);
}
document.body.appendChild(countriesList);

document.querySelector(".fn-remove-me").remove();

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const carsList = document.createElement("ul");
for (const car of cars) {
    const li = document.createElement("li");
    li.textContent = car;
    carsList.appendChild(li);
}
document.querySelector('[data-function="printHere"]').appendChild(carsList);

const countryCards = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const cardsContainer = document.createElement("div");
cardsContainer.id = "cardsContainer";

for (const card of countryCards) {
    const cardDiv = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.textContent = card.title;
    const img = document.createElement("img");
    img.src = card.imgUrl;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar esta tarjeta";
    removeButton.addEventListener("click", () => cardDiv.remove());

    cardDiv.appendChild(h4);
    cardDiv.appendChild(img);
    cardDiv.appendChild(removeButton);
    cardsContainer.appendChild(cardDiv);
}

document.body.appendChild(cardsContainer);

const removeLastButton = document.createElement("button");
removeLastButton.textContent = "Eliminar la última tarjeta";
removeLastButton.addEventListener("click", () => {
    if (cardsContainer.lastElementChild) {
        cardsContainer.lastElementChild.remove();
    }
});
document.body.appendChild(removeLastButton);
