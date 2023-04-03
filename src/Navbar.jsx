
function Navbar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return (
    <>
      <div className="pokemon-container">
        {pokemonList.map((element, index) => {
          const handleClickButton = () => {
            setPokemonIndex(index);
          };
          return (
            <button key={element.name} onClick={handleClickButton}>
              <img className="imgButton" src={element.imgSrc} alt="" />
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
