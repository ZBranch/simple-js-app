let pokemonList = [
  { name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"] },
  { name: "Charizard", height: 1.7, types: ["Fire", "Flying"] },
  { name: "Squirtle", height: 0.5, types: "Water" },
  { name: "Pikachu", height: 0.4, types: "Electric" },
  { name: "Rattata", height: 0.3, types: "Normal" },
  { name: "Nidoking", height: 1.4, types: ["Ground", "Poison"] },
];

for (let i = 0; i < pokemonList.length; i++)
  if (pokemonList[i]) {
    document.write(pokemonList[i].name + " ")
  }

  if (pokemonList[i].height >1.5){
    document.write("This is a big Pokemon!")
  } else if (pokemonList[i].height > 0.5 && pokemonList.height < 1.5){
    document.write("This is an average Pokemon.");
  } else {
    document.write("This is a small Pokemon.")
  }
