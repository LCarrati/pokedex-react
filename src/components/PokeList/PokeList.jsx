import { useState, useEffect } from 'react';
import { Card } from '../Card';
import axios from '../../api/axios';
import { Container, NavBtn, Wrapper } from './styles';
import { useGetPokemons } from '../../Hooks/useGetPokemons';
import usePagination from '../../Hooks/usePagination';
import { useParams } from 'react-router-dom';
import { Skeleton } from '../skeletons/Skeleton';

const PokeList = () => {

    const [pokemonsURLs, setPokemonsURLs] = useState([])
    const [totalPokemons, setTotalPokemons] = useState()

    let { pageNumber = '1' } = useParams();
    pageNumber = Number(pageNumber);

    const limit = 20;
    const offset = (pageNumber - 1) * limit;

    const getPokemons = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        const response = await axios.get(url)
        setPokemonsURLs(response.data.results.map(url => url.url))
        setTotalPokemons(response.data.count)
    }
    
    useEffect(() => {
        getPokemons();
    }, [pageNumber]);
    
    const pagesButtons = usePagination(totalPokemons ? totalPokemons : 1)
    const pokemons = useGetPokemons(pokemonsURLs ? pokemonsURLs : [])

    const cardList = pokemons?.map((pokemon) => (
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

    const skeletonLoading = (Array.from({ length: limit }, (_, i) => (
        i
    ))).map((i) => <Skeleton />)

    return (
        <Container>
            <h1>Todos os Pokemons</h1>
            <Wrapper>{pokemons.length == limit ? cardList : skeletonLoading}</Wrapper>
            <NavBtn>{pagesButtons?.map((button) => button)}</NavBtn>
        </Container>
    )
}

export default PokeList