import { useState, useEffect } from 'react';
import { Card } from '../Card';
import axios from '../../api/axios';
import { Container, Wrapper } from './styles';

const PokeList = () => {
    const [pokeList, setPokeList] = useState([]);
    // const offset = 0;
    // const limit = 5;

    function convertPokeApiDetailToPokemon(pokeDetail) {

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types

        const pokemon = {
            number : pokeDetail.id,
            name : pokeDetail.name,
            types : types,
            type : type,        
            photo : pokeDetail.sprites.other['official-artwork'].front_default,
            moves: [pokeDetail.moves[0], pokeDetail.moves[1], pokeDetail.moves[2], pokeDetail.moves[3]],
            hp: pokeDetail.stats[0].base_stat,
            attack: pokeDetail.stats[1].base_stat,
            defense: pokeDetail.stats[2].base_stat,
            specialAttack: pokeDetail.stats[3].base_stat,
            specialDefense: pokeDetail.stats[4].base_stat,
            speed: pokeDetail.stats[5].base_stat,
            spriteBack: pokeDetail.sprites.back_shiny,
            spriteFront: pokeDetail.sprites.front_shiny
        }    
        return setPokeList(pokeList => [...pokeList, pokemon])
    }
    
    async function getPokemonDetail(pokemon) {
        const response = await axios.get(pokemon.url);          
        convertPokeApiDetailToPokemon(response.data);
    }
    
    async function getPokemons(offset = 0, limit = 5) {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        const response = await axios.get(url);
        const pokemonList = response.data.results
        pokemonList.map((poke) => {getPokemonDetail(poke)})
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const cardList = pokeList.map((pokemon) => (
        <Card 
            key={pokemon.number}
            number={pokemon.number}
            name={pokemon.name}
            types={pokemon.types}
            type={pokemon.type}
            photo={pokemon.photo}
            value={'Capturar!'}
            onClick={'capturar'}
            bg={'white'}
            color={'black'}
        />
    ))
    
    return (
        <Container>
            <h1>Todos os Pokemons</h1>
            <Wrapper>{cardList}</Wrapper>
        </Container>
    )
}

export default PokeList