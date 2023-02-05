import { useEffect, useState } from "react";
import axios from "../api/axios";

export const useGetPokemons = (url) => {

    const [pokemons, setPokemons] = useState([])
    const [urlState, setUrlState] = useState([])

    function convertPokeApiDetailToPokemon(pokeDetail) {
        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types

        const pokemon = {
            number: pokeDetail.id,
            name: pokeDetail.name,
            types: types,
            type: type,
            photo: pokeDetail.sprites.other['official-artwork'].front_default,
            moves: [pokeDetail.moves[0], pokeDetail.moves[1], pokeDetail.moves[2], pokeDetail.moves[3]],
            hp: pokeDetail.stats[0].base_stat,
            attack: pokeDetail.stats[1].base_stat,
            defense: pokeDetail.stats[2].base_stat,
            specialAttack: pokeDetail.stats[3].base_stat,
            specialDefense: pokeDetail.stats[4].base_stat,
            speed: pokeDetail.stats[5].base_stat,
            spriteBack: pokeDetail.sprites.back_shiny === null ? 'https://via.placeholder.com/150' : pokeDetail.sprites.back_shiny,
            spriteFront: pokeDetail.sprites.front_shiny === null ? 'https://via.placeholder.com/150' : pokeDetail.sprites.front_shiny
        }
        return setPokemons(pokemons => [...pokemons, pokemon].sort((a, b) => a.number - b.number))
    }

    async function getPokemonDetail(url) {
        const response = await axios.get(url);
        convertPokeApiDetailToPokemon(response.data);
    }

    useEffect(() => {
        setPokemons([])
        urlState.map(url => getPokemonDetail(url))
    }, [urlState])

    useEffect(() => {
        if(JSON.stringify(url) !== JSON.stringify(urlState)){
            setUrlState(url)
        }
    }, [url])

    return pokemons
}