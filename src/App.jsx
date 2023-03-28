import { useState } from 'react'
import './App.css'
import PokemonCard from "./components/PokemonCard"


function App() {
  const [count, setCount] = useState(0)

  const pokemon = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
      <div>
      <PokemonCard pokemon={pokemon[0]}/>
    </div>
  )
}

export default App
