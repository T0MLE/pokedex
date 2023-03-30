import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

return (

    <figure className="card" style={{backgroundColor : pokemon.color}}>
        <figcaption>{pokemon.name}</figcaption>
        {pokemon.imgSrc ?
      <img src={pokemon.imgSrc} alt={pokemon.name} className="imgPokemon" />
    : <p>???</p> }
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa, facilis animi optio maiores quaerat sit sapiente. 
        Culpa nam in, harum iste aliquam necessitatibus assumenda neque similique tempora autem aut!</p>
    </figure>
)
}

PokemonCard.propTypes = {
    pokemon : PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired
  }


export default PokemonCard;
