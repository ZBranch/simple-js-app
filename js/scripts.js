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
  function addListItem(pokemon){
    let pokemonList = document.querySelector (".pokemon-list");
    let listpokemon = document.createElement ("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  let button = document.querySelector('Bulbasaur');
  button.addEventListener('click', function (event) {
    document.write(event);
  });

  let button = document.querySelector('Charizard');
  button.addEventListener('click', function (event) {
    document.write(event);
  });

  let button = document.querySelector('Squirtle');
  button.addEventListener('click', function (event) {
    document.write(event);
  });

  let button = document.querySelector('Pikachu');
  button.addEventListener('click', function (event) {
    document.write(event);
  });

  let button = document.querySelector('Rattata');
  button.addEventListener('click', function (event) {
    document.write(event);
  });

  let button = document.querySelector('Nidoking');
  button.addEventListener('click', function (event) {
    document.write(event);
  });
});
