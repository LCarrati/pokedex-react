import { Button } from "../Button"
import { Container, ReturnMenu } from "./styles"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { PokeContext } from "../../Global/PokeContext"
import { useAlert } from "../../Hooks/useAlert"

export const Header = (props) => {

  const [actualPage] = useContext(PokeContext)['pageState']
  const [showAlert, setShowAlert] = useContext(PokeContext)['alertState'];

  const alert = useAlert(showAlert)

  return (
    <Container>
      <ReturnMenu rtdisplay={props.rtdisplay}>
        <Link to={`/${actualPage || 1}`} className="return">
          <img className="lt-bullet" src="../icons/lt-arrow.png" alt="logo" />
          Todos os Pokemons
        </Link>
      </ReturnMenu>
      <img src="../logo.png" alt="logo" />
      <Button
        onClick={props.onClick}
        value={props.label}
        bg={'#33A4F5'}
        color={"white"}
        w={'287px'}
        h={'74px'}
        fs={'24px'}
        fw={'700'}
        display={props.display ? props.display : 'flex'}
      />
      <div style={{ position: 'fixed', top: '25%', zIndex: '2' }}>{alert}</div>
    </Container>
  )
}