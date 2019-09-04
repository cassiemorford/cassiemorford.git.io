import React from "react";
import "isomorphic-fetch";
import Fonts from '../Fonts';

interface PokemonLight {
    name: string;
    url: string;
}

interface PokemonHeavy {
    name: string;
    url: string;
}

interface PokemonListState {
  data: any;
}

class PokemonList extends React.Component<{}, PokemonListState> {
    constructor(props) {
        super(props);
        this.state = { data: []};
    }

    async getPokemonData(url) {
        const resp = await fetch(url);
        const pokemonData: PokemonHeavy = await resp.json();
        this.setState((prevState) => {
            return {data: [...prevState.data, pokemonData]};
        });
    }

    async getPokemons(url) {
        const resp = await fetch(url);
        const respJson = await resp.json();
        const results: PokemonLight[] = respJson.results;
        results.forEach(res => this.getPokemonData(res.url));

        if (respJson.next) {
            this.getPokemons(respJson.next);
        }
    }

    componentDidMount() {
        Fonts();
        this.getPokemons(`https://pokeapi.co/api/v2/pokemon/`);
    }

    render() {
        const { data } = this.state;

        return (
            <div className="pokemon-list">
                <div className="pokemon-list__counter">
                    {data.length} pokemon loaded
                </div>
                {data.map(pokemon => {
                    const primaryType = pokemon.types[0].type.name;
                    const pokemonClass = `pokemon-mini pokemon-mini--${primaryType}`;
                    return  (
                        <a className={pokemonClass} href={`/pokemon?pokemon=${pokemon.name}`}>
                            <h3 className="pokemon-mini__name">{pokemon.name}</h3>
                            <img className="pokemon-mini__image" src={pokemon.sprites && pokemon.sprites.front_default}/>
                        </a>)}

                   )}
            </div>
        );
    }
}

export default PokemonList;
