function ButtonsDown({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickDown = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  return (
    <>
      {pokemonIndex > 0 && (
        <button
          style={{ backgroundColor: pokemonList[pokemonIndex - 1].color }}
          className="button-skip"
          onClick={handleClickDown}
        >
          Previous
        </button>
      )}
    </>
  );
}

export default ButtonsDown;
