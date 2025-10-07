import { useEffect, useState } from "react";
import css from "./Pokemons.module.css";
import { getPokemon, getRandomPokemons } from "../../services/pokemonService";
import { PokemonDetails, PokemonShortInfo } from "../../types/pokemon";
import Modal from "../Modal/Modal";

const Pokemons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pokemonList, setPokemonList] = useState<PokemonShortInfo[]>([]);
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRandomPokemons();
      setPokemonList(res);
    };

    fetchData();
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setPokemonUrl("");
    setPokemonDetails(null);
  };

  const handlePokemonSelect = (url: string) => {
    setIsVisible(true);
    setPokemonDetails(null);
    setPokemonUrl(url);
  };

  useEffect(() => {
    if (!pokemonUrl) {
      return;
    }

    getPokemon(pokemonUrl).then(setPokemonDetails);
  }, [pokemonUrl]);

  return (
    <div className={css.pokemons}>
      <ul className={css.list}>
        {pokemonList.map((el) => (
          <li className={css.item} key={el.url}>
            <button
              type="button"
              className={css.trigger}
              onClick={() => handlePokemonSelect(el.url)}
            >
              {el.name}
            </button>
          </li>
        ))}
      </ul>

      {isVisible && (
        <Modal onClose={closeModal}>
          <div className={css.details}>
            {pokemonDetails ? (
              <>
                <div className={css.detailsVisual}>
                  <img
                    className={css.detailsImage}
                    src={pokemonDetails.sprites.front_default ?? ""}
                    alt={pokemonDetails.name}
                  />
                </div>
                <h5 className={css.detailsName}>{pokemonDetails.name}</h5>
                <ul className={css.detailsStats}>
                  <li className={css.statItem}>
                    <span className={css.statLabel}>Height</span>
                    <span className={css.statValue}>
                      {(pokemonDetails.height / 10).toFixed(1)} m
                    </span>
                  </li>
                  <li className={css.statItem}>
                    <span className={css.statLabel}>Weight</span>
                    <span className={css.statValue}>
                      {(pokemonDetails.weight / 10).toFixed(1)} kg
                    </span>
                  </li>
                </ul>
              </>
            ) : (
              <div className={css.placeholder}>Завантаження даних…</div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Pokemons;
