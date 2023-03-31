function ButtonsUp({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickUp = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <>
      <button
        style={{
          backgroundColor:
            pokemonIndex === pokemonList.length - 1
              ? "lightgray"
              : pokemonList[pokemonIndex + 1].color,
          opacity: pokemonIndex === pokemonList.length - 1 && 0.6,
        }}
        className="button-skip"
        onClick={pokemonIndex < pokemonList.length - 1 ? handleClickUp : null}
      >
        Next
      </button>
    </>
  );
}
export default ButtonsUp;
