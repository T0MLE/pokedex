
function Navbar({pokemonIndex, setPokemonIndex, pokemonList}) {
    const handleClickUp = () => {
        setPokemonIndex(pokemonIndex + 1)
      }
      const handleClickDown = () => {
        setPokemonIndex(pokemonIndex - 1)
      }
      
    return (
    <div className='buttons'>
        {pokemonIndex > 0 && <button onClick={handleClickDown}>Précédent</button>}
        {pokemonIndex < pokemonList - 1 && <button onClick={handleClickUp}>Suivant</button>}
    </div>
    )
}

export default Navbar;