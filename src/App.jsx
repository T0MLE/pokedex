import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import Navbar from './Navbar';


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


  return (
      <div className='pokedex'>
      <Navbar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList.length} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
  )
}

export default App
