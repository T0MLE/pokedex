import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import Navbar from "./Navbar";
import ButtonsUp from "./components/ButtonsUp";
import ButtonsDown from "./components/ButtonsDown";
import pokemonList from "./components/PokemonList";


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <div className="pokedex">
      <Navbar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
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
  );
}

export default App;
