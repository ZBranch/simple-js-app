let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }


  //let pokemonRepository = (function() {
    let modalContainer = document.querySelector('#modal-container');

    function showModal(pokemon) {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");

      modalTitle.empty();
      modalBody.empty();

      let modalContainer = document.querySelector('#modal-container');
      modalContainer.innerHTML = '';

      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      //creating element for name in modal content
      let nameElement = $("<h1>" + pokemon.name + "</h1>");

      //creating element for height in modal content
      let heightElement = $("<p>" + "<Height: " + pokemon.height + " inches" + "</p>");

      //creating element for weight in modal content
      let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");

      //creating element for types in modal content
      let typesElement = $("<p>" + "Types: " + pokemon.types + "</p>");

      //creating element for abilities in modal content
      let abilitiesElement = $("<p>" + "Abilities: " + pokemon.abilities + "</p>");

      let container = document.querySelector('#image-container');

      let imageElement = document.createElement("img");
      imageElement.src = pokemon.imageUrl;

      modal.appendChild(closeButtonElement);
      modal.appendChild(nameElement);
      modal.appendChild(weightElement);
      modal.appendChild(typesElement);
      modal.appendChild(abilitiesElement);
      modal.appendChild(imageElement);
      modal.appendChild(heightElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add("is-visible");
}


    let dialogPromiseReject; // This can be set later, by showDialog

function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');

  if (dialogPromiseReject) {
    dialogPromiseReject();
    dialogPromiseReject = null;
  }
}

  function showDialog(title, text) {
showModal(title, text);

// We have defined modalContainer here
let modalContainer = document.querySelector('#modal-container');

// We want to add a confirm and cancel button to the modal
let modal = modalContainer.querySelector('.modal');

let confirmButton = document.createElement('button');
confirmButton.classList.add('modal-confirm');
confirmButton.innerText = 'Confirm';

let cancelButton = document.createElement('button');
cancelButton.classList.add('modal-cancel');
cancelButton.innerText = 'Cancel';

modal.appendChild(confirmButton);
modal.appendChild(cancelButton);

// We want to focus the confirmButton so that the user can simply press Enter
confirmButton.focus();

return new Promise((resolve, reject) => {
  cancelButton.addEventListener('click', hideModal);
  confirmButton.addEventListener('click', () => {
    dialogPromiseReject = null; // Reset this
    hideModal();
    resolve();
  });
  // This can be used to reject from other functions
  dialogPromiseReject = reject;
});
}

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

//})();

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
