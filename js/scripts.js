let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"] },
    { name: "Charizard", height: 1.7, types: ["Fire", "Flying"] },
    { name: "Squirtle", height: 0.5, types: "Water" },
    { name: "Pikachu", height: 0.4, types: "Electric" },
    { name: "Rattata", height: 0.3, types: "Normal" },
    { name: "Nidoking", height: 1.4, types: ["Ground", "Poison"] },
  ];

  // let pokemonRepository = (function () {
  // let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + " (Height: " + pokemon.height + ")");
  if (pokemon.height > 1.5) {
    document.write("Wow, that's big!" + "<br>");
  } else {
    document.write("<br>");
  }
});
