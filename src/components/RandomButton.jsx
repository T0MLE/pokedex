import pokemonList from "./PokemonList";

function RandomButton({ pokemonIndex, setPokemonIndex }) {
  const handleClickRandom = () => {
    let random = Math.floor(Math.random() * pokemonList.length);
    setPokemonIndex(random);
  };

  return (
    <button className="random-btn" onClick={handleClickRandom}>
      {" "}
      Random pokemon{" "}
    </button>
  );
}

export default RandomButton;
