import { useState } from 'react'
import './App.css'
import PokemonCard from "./components/PokemonCard"


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <PokemonCard/>
    </div>
  )
}

export default App
