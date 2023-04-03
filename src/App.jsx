import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import Navbar from "./Navbar";
import ButtonsUp from "./components/ButtonsUp";
import ButtonsDown from "./components/ButtonsDown";
import pokemonList from "./components/PokemonList";
import Searchbar from "./components/Searchbar";
import RandomButton from "./components/RandomButton";
import Quizz from "./Quizz";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <>
      <div className="pokedex">
        <Navbar
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
          pokemonList={pokemonList}
        />
        <div className="search-random">
          <Searchbar
            pokemonIndex={pokemonIndex}
            setPokemonIndex={setPokemonIndex}
            pokemonList={pokemonList}
          />
          <RandomButton
            pokemonIndex={pokemonIndex}
            setPokemonIndex={setPokemonIndex}
            pokemonList={pokemonList}
          />
        </div>
        <div className="buttons-card">
          <ButtonsDown
            pokemonIndex={pokemonIndex}
            setPokemonIndex={setPokemonIndex}
            pokemonList={pokemonList}
          />
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
          <ButtonsUp
            pokemonIndex={pokemonIndex}
            setPokemonIndex={setPokemonIndex}
            pokemonList={pokemonList}
          />
        </div>
      </div>
      <div className="quizz-container">
        <Quizz
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
          pokemonList={pokemonList}
        />
      </div>
    </>
  );
}

export default App;
