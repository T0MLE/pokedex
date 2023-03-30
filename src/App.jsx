import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import { useEffect } from "react";
import Navbar from './Navbar';


const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        color : 'lightgreen',
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        color: 'lightcoral'
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        color : 'lightblue'
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        color : 'yellow'
    },
    {
      name: "Mew",
      color: 'lightpink'
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);


  useEffect(
    () =>  {
      setTimeout(() => {
        alert("hello pokemon trainer :)")
      }, "300");
    }, 
    []
  );

  return (
      <div className='pokedex'>
      <Navbar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
  )
}



export default App
