import { useState } from "react";

function ButtonsUp({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickUp = () => {
    setPokemonIndex(pokemonIndex + 1);
    setBgColour(
      pokemonIndex < pokemonList.length - 2 &&
        pokemonList[pokemonIndex + 2].color
    );
  };

  const [bgColour, setBgColour] = useState("#fafafa");

  const handleMouseEnter = () => {
    setBgColour(pokemonList[pokemonIndex + 1].color);
  };
  const handleMouseLeave = () => {
    setBgColour("#fafafa");
  };

  return (
    <>
      <button
        style={{
          backgroundColor: bgColour,
          opacity: pokemonIndex === pokemonList.length - 1 && 0.6,
        }}
        className="button-skip"
        onClick={pokemonIndex < pokemonList.length - 1 ? handleClickUp : null}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Next
        <img
          className="imgButton"
          src={
            pokemonIndex < pokemonList.length - 1
              ? pokemonList[pokemonIndex + 1].imgSrc
              : null
          }
          alt=""
        />
      </button>
    </>
  );
}
export default ButtonsUp;
