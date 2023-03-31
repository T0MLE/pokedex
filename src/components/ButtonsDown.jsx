function ButtonsDown({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickDown = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  return (
    <>
      <button
        style={{
          backgroundColor:
            pokemonIndex < 1
              ? "lightgray"
              : pokemonList[pokemonIndex - 1].color,
          opacity: pokemonIndex < 1 && 0.6,
        }}
        className="button-skip"
        onClick={pokemonIndex > 0 ? handleClickDown : null}
      >
        Previous
      </button>
    </>
  );
}

export default ButtonsDown;
