function ButtonsUp({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickUp = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <>
      {pokemonIndex < pokemonList.length - 1 && (
        <button
          style={{ backgroundColor: pokemonList[pokemonIndex + 1].color }}
          className="button-skip"
          onClick={handleClickUp}
        >
          Next
        </button>
      )}
    </>
  );
}
export default ButtonsUp;
