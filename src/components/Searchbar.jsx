import { useState } from "react";
import pokemonList from "./PokemonList";

function Searchbar({ setPokemonIndex }) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  pokemonList.map((element, index) => {
    if (element.name.toLowerCase() === search.toLowerCase()) {
      setPokemonIndex(index);
    }
  });

  return (
    <form>
      <label htmlFor="">
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search for a Pokemon"
        />
      </label>
    </form>
  );
}

export default Searchbar;
