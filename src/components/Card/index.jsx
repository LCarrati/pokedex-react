import { Wrapper } from "./styles"
import { Button } from "../Button"
import { PokeContext } from "../../Global/PokeContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const Card = ({ number, name, types, type, photo, onClick, value, bg, color }) => {

    const [myPokedex, setMyPokedex] = useContext(PokeContext)['pokedexState']
    const [showAlert, setShowAlert] = useContext(PokeContext)['alertState'];

    const capturar = () => {
        if (!myPokedex.includes(number)) {
            setMyPokedex([...myPokedex, number])
            setShowAlert('addPokemon')
        } else { alert('Vc já tem esse!') }
    }
    const removerPokemon = () => {
        const novaLista = myPokedex.filter((item) => item !== number)
        setMyPokedex(novaLista)
        setShowAlert('delPokemon')
    }

    return (
        <Wrapper>
            <li key={number} className={`card ${type}`}>
                <div className="container-top">
                    <p className="number">#{number.toLocaleString(undefined, {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    })}</p>
                    <p className="name">{name}</p>
                    <div className="detail">
                        <ol className="types">
                            {types.map((type) => <li key={type} className="type ${type}">
                                <img className="typeIcon" src={`bullets/${type}.png`} alt="" />
                            </li>)}
                        </ol>
                    </div>
                </div>
                <div>
                    <img src="wing.png" alt="wings" className="wings" />
                    <img src={photo} alt={name} className="photo" />
                </div>
                <div className="bottom">
                    <Link to={`/pokemon/${number}`}><p className="detalhesLink">Detalhes</p> </Link>
                    <Button onClick={onClick === 'capturar' ? () => capturar(number) : () => removerPokemon(number)} value={value} bg={bg} color={color} w={'146px'} h={'38px'} fs={'16px'} fw={'400'} />
                </div>
            </li>
        </Wrapper>
    )
}