let pokemonList = [
  { name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"] },
  { name: "Charizard", height: 1.7, types: ["Fire", "Flying"] },
  { name: "Squirtle", height: 0.5, types: "Water" },
  { name: "Pikachu", height: 0.4, types: "Electric" },
  { name: "Rattata", height: 0.3, types: "Normal" },
  { name: "Nidoking", height: 1.4, types: ["Ground", "Poison"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + " (Height: " + pokemonList[i].height + ")"
  );

  if (pokemonList[i].height > 1.5) {
    document.write("Wow, that's big!" + "<br>")
  } else {
    document.write("<br>")
  }
}
