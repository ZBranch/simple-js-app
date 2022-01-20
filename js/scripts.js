<script>

let pokemonList =
    [{name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"]},
        {name: "Charizard", height: 1.7, types: ["Fire","Flying"]},
            {name: "Squirtle", height: 0.5, types: "Water"},
                  {name: "Pikachu", height: 0.4, types: "Electric"},
                      {name: "Rattata", height: 0.3, types: "Normal"},
                          {name: "Nidoking", height: 1.4, types: "Ground", "Poison"}];

let pokemon = {name: "Bulbasaur", height: 0.7};
  if (pokemon.size > 1.5) {
    console.log("This is a large Pokemon!")
  } else if (pokemon.height > 0.5 && pokemon.height < 1.5) {
    console.log("This is an average Pokemon");
  } else {
    console.log("This is a small Pokemon")
  }

</script>
