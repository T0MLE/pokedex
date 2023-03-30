
function Navbar({pokemonIndex, setPokemonIndex, pokemonList}) {
    const handleClickUp = () => {
        setPokemonIndex(pokemonIndex + 1)
      }
      const handleClickDown = () => {
        setPokemonIndex(pokemonIndex - 1)
      }

    return (
    <div className='buttons-container'>
        {pokemonIndex > 0 && <button className='button' onClick={handleClickDown}>Previous</button>}
        {pokemonIndex < pokemonList.length - 1 && <button className='button' onClick={handleClickUp}>Next</button>}
    </div>
    )
}

export default Navbar;