import { useState } from "react";

function ButtonsDown({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickDown = () => {
    setPokemonIndex(pokemonIndex - 1);
    setBgColour(pokemonIndex > 1 && pokemonList[pokemonIndex - 2].color);
  };

  const handleMouseEnter = () => {
    setBgColour(pokemonList[pokemonIndex - 1].color);
  };
  const handleMouseLeave = () => {
    setBgColour("#fafafa");
  };

  const [bgColour, setBgColour] = useState("#fafafa");

  return (
    <>
      <button
        style={{
          backgroundColor: bgColour,
          opacity: pokemonIndex < 1 && 0.6,
        }}
        className="button-skip"
        onClick={pokemonIndex > 0 ? handleClickDown : null}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Previous
        <img
          className="imgButton"
          src={pokemonIndex > 0 ? pokemonList[pokemonIndex - 1].imgSrc : null}
          alt=""
        />
      </button>
    </>
  );
}

export default ButtonsDown;
