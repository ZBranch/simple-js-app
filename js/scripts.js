let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");

    // ** Add Bootstrap styling via Bootstrap's classes
    button.classList.add(
      "list-group-item",
      "list-group-item-action",
      "text-center",
      "text-uppercase"
    );
    //

    // ** data-toggle and data-target are how we can target the Bootstrap modal in the
    // HTML file
    listpokemon.setAttribute("data-toggle", "modal");
    listpokemon.setAttribute("data-target", "#exampleModal");
    //
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return (
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (details) {
          // details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;

          // ** Create an array and loop through each type and push it to the array
          item.types = [];
          details.types.forEach(function (itemType) {
            item.types.push(itemType.type.name);
          });
        })
        //
        .catch(function (e) {
          console.error(e);
        })
    );
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //let pokemonRepository = (function() {

  function showModal(pokemon) {
    let modalTitle = document.getElementById("modal-title");
    let modalBody = document.getElementById("modal-body");

    modalTitle.innerHTML = "";
    modalBody.innerHTML = "";

    const titleElement = pokemon.name.toUpperCase();
    const heightElement = "Height: " + pokemon.height + '"';
    const typesElement = " Types: " + pokemon.types.join(",");

    let imageElement = document.createElement("img");
    imageElement.classList.add("modal-img");
    imageElement.src = pokemon.imageUrl;

    modalTitle.append(titleElement);
    modalBody.append(heightElement, typesElement, imageElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
