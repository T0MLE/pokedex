const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];


function PokemonCard() {
  const pokemon = pokemonList[0];
return (
  pokemon.hasOwnProperty('imgSrc') ?
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  :
    <figure>
      <p>???</p>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
)
}





export default PokemonCard;
