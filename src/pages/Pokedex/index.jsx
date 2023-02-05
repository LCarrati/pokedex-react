import { useContext } from "react"
import { PokeContext } from "../../Global/PokeContext"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Container } from "./styles"
import { useGetPokemons } from '../../Hooks/useGetPokemons'

const Pokedex = () => {
  const [myPokedex] = useContext(PokeContext)['pokedexState']

  const urlArray = myPokedex.map((id) => `/pokemon/${id}`)
  const myPokeList = useGetPokemons(urlArray)

  const cardList = myPokeList.map((poke) => (
    <Card
      key={poke.number}
      number={poke.number}
      name={poke.name}
      types={poke.types}
      type={poke.type}
      photo={poke.photo}
      value={'Excluir'}
      onClick={'excluir'}
      bg={'#FF6262'}
      color={'white'}
    />
  ))

  return (
    <Container>
      <Header display={'none'} />
      <div className='mainTitle'>Meus Pokemons</div>
      {cardList}
    </Container>
  )
}

export default Pokedex