const randomPokemonId = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
  .then(response => response.json())
  .then(pokemon => {
    document.querySelector(".random-image").src = pokemon.sprites.other["official-artwork"].front_default;
  });
