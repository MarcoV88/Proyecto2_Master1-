fetch("https://thronesapi.com/api/v2/Characters")
  .then(response => response.json())
  .then(characters => {
    const characterList = document.querySelector("#character-list");

    for (const character of characters) {
      const option = document.createElement("option");
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      characterList.appendChild(option);
    }

    document.querySelector(".character-image").src = characters[0].imageUrl;

    characterList.addEventListener("change", event => {
      document.querySelector(".character-image").src = event.target.value;
    });
  });
