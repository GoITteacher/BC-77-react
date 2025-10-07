export interface PokemonShortInfo{
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    weight: number;
    height: number;
}