import { useState } from "react";

function Quizz({ pokemonList }) {
  const handleClickQuizz = () => {
    let random = Math.floor(Math.random() * pokemonList.length);
    setQuizz(random);
  };

  const [quizz, setQuizz] = useState(
    Math.floor(Math.random() * pokemonList.length)
  );

  const [searchQuizz, setSearchQuizz] = useState("");
  const handleSearchQuizz = (e) => {
    setSearchQuizz(e.target.value);
  };

  //   if (searchQuizz.toLowerCase() == pokemonList[quizz].name.toLowerCase()) {
  //   }

  return (
    <>
      <div className="div-quizz">
        <button className="quizz-btn" onClick={handleClickQuizz}>
          GUESS THE POKEMON{" "}
        </button>

        <img
          className={
            searchQuizz.toLowerCase() == pokemonList[quizz].name.toLowerCase()
              ? "img-quizz"
              : "img-quizz-fail"
          }
          src={pokemonList[quizz].imgSrc}
          alt=""
        />
        <p>
          {searchQuizz.toLowerCase() == pokemonList[quizz].name.toLowerCase()
            ? "ui c moi"
            : "???"}
        </p>
        <form>
          <label htmlFor="">
            <input
              type="text"
              id="searchQuizz"
              value={searchQuizz}
              onChange={handleSearchQuizz}
              placeholder="WHO'S THAT POKEMON ?"
            />
          </label>
        </form>
      </div>
    </>
  );
}

export default Quizz;
