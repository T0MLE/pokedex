import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        color : 'lightgreen'
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        color: 'lightcoral'
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        color : 'lightblue'
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        color : 'yellow'
    },
    {
      name: "mew",
      color: 'lightpink'
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickUp = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  const handleClickDown = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  return (
      <div className='pokedex'>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <div className='buttons'>
        {pokemonIndex > 0 && <button onClick={handleClickDown}>Précédent</button>}
        {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickUp}>Suivant</button>}
      </div>
    </div>
  )
}

export default App
