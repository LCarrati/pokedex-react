import PokeList from "../../components/PokeList/PokeList"
import { Header } from "../../components/Header"
import { Container } from "./styles"
import { useNavigate } from "react-router-dom"

const Main = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <Header label={'Pokédex'} onClick={() => navigate("/minhapokedex")} rtdisplay={'hidden'} />
      <PokeList />
    </Container>
  )
}

export default Main