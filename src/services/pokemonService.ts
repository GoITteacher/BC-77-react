import axios from "axios";
import { PokemonDetails, PokemonShortInfo } from "../types/pokemon";


interface RandomPokemonResponse{
    count: number;
    results: PokemonShortInfo[];
}

export const getRandomPokemons = async ()=>{
    const rand = Math.round(Math.random() * 600);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${rand}`;
    const res = await axios.get<RandomPokemonResponse>(url);
    return res.data.results;
}

export const getPokemon = async (url: string) => {
     const res = await axios.get<PokemonDetails>(url);
    return res.data;
}