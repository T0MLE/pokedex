
function Navbar({pokemonIndex, setPokemonIndex, pokemonList}) {
    const handleClickUp = () => {
        setPokemonIndex(pokemonIndex + 1)
      }
      const handleClickDown = () => {
        setPokemonIndex(pokemonIndex - 1)
      }

      if (pokemonIndex === 3){
        setTimeout(() => {
          alert("pika pika pikachu !!!")
        }, "200");
      }

    return (
    <div className='buttons-container'>
        {pokemonIndex > 0 && <button style={{backgroundColor : pokemonList[pokemonIndex - 1].color}} className='button' onClick={handleClickDown}>Previous</button>}
        {pokemonIndex < pokemonList.length - 1 && <button style={{backgroundColor : pokemonList[pokemonIndex + 1].color}} className='button' onClick={handleClickUp}>Next</button>}
    </div>
    )
}

export default Navbar;