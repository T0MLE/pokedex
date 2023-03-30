import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure className="card" style={{ backgroundColor: pokemon.color }}>
      <figcaption>{pokemon.name}</figcaption>
      <img src={pokemon.imgSrc} alt={pokemon.name} className="imgPokemon" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa,
        facilis animi optio maiores quaerat sit sapiente.{" "}
      </p>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequilightcoral,
    imgSrc: PropTypes.string,
  }).isRequilightcoral,
};

export default PokemonCard;
