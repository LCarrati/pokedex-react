import { Header } from "../../components/Header"
import { Container, DetailCardWrapper, Sprites, SpritesWrapper, Stats, MovesWrapper, Moves, MiniCard } from "./styles"
import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { PokeContext } from "../../Global/PokeContext"
import { useGetPokemons } from '../../Hooks/useGetPokemons'

export const PokeDetails = () => {
    const navigate = useNavigate();
    const { identify } = useParams()

    const pokemon = useGetPokemons([`/pokemon/${identify}`])

    const [myPokedex, setMyPokedex] = useContext(PokeContext)['pokedexState']
    const [showAlert, setShowAlert] = useContext(PokeContext)['alertState'];

    const barColor = (stat) => {
        if (stat <= 30) return "#FF7B2D";
        else if (stat <= 50 && stat >= 30) return "#FFDE6A";
        else return "#8ADC8E";
    };

    const barWidth = (stat) => {
        return `${100 * stat / 120}%`;
    };

    // se nao colocar || 0, enquanto pokemon não tiver retornado da API esse valor será undefined, o que gera 
    // 'warning' no console.log, mesmo que depois apareça o resultado correto na tela.
    const totalStats = (pokemon[0]?.hp || 0) + (pokemon[0]?.attack || 0) +
        (pokemon[0]?.defense || 0) + (pokemon[0]?.specialAttack || 0) +
        (pokemon[0]?.specialDefense || 0) + (pokemon[0]?.speed || 0);
    ;

    const headerBtnInfo = () => {
        if (myPokedex.includes(pokemon[0]?.number)) {
            return {
                'label': 'Excluir da Pokédex',
                'onClick': () => { setMyPokedex(myPokedex.filter((num) => num !== pokemon[0]?.number)); navigate("/minhapokedex"); setShowAlert('delPokemon') },
            }
        } else return {
            'label': 'Capturar!',
            'onClick': () => { setMyPokedex([...myPokedex, pokemon[0]?.number]); navigate("/minhapokedex"); setShowAlert('addPokemon') }
        }
    }

    return (
        <Container>
            <Header label={headerBtnInfo().label} onClick={headerBtnInfo().onClick} />
            <div className='mainTitle'>Detalhes</div>
            <DetailCardWrapper>
                <div className={pokemon[0]?.type}>
                    <SpritesWrapper>
                        <Sprites>
                            <img src={pokemon[0]?.spriteFront} alt="Sprite Front" width='100%' />
                        </Sprites>
                        <Sprites>
                            <img src={pokemon[0]?.spriteBack} alt="Sprite Front" width='100%' />
                        </Sprites>
                    </SpritesWrapper>
                    <Stats>
                        <h1>Base stats</h1>
                        <div className='statWrapper'>
                            <div className='statName'>HP</div>
                            <div className='statValue'>{pokemon[0]?.hp}</div>
                            <div className='statMaxBar'>
                                <div className='statBar' style={{ width: barWidth(pokemon[0]?.hp), background: barColor(pokemon[0]?.hp) }}>
                                </div>
                            </div>
                        </div>
                        <div className='statWrapper'>
                            <div className='statName'>Attack</div>
                            <div className='statValue'>{pokemon[0]?.attack}</div>
                            <div className='statMaxBar'>
                                <div className='statBar' style={{ width: barWidth(pokemon[0]?.attack), background: barColor(pokemon[0]?.attack) }}>
                                </div>
                            </div>
                        </div>
                        <div className='statWrapper'>
                            <div className='statName'>Defense</div>
                            <div className='statValue'>{pokemon[0]?.defense}</div>
                            <div className='statMaxBar'>
                                <div className='statBar' style={{ width: barWidth(pokemon[0]?.defense), background: barColor(pokemon[0]?.defense) }}>
                                </div>
                            </div>
                        </div>
                        <div className='statWrapper'>
                            <div className='statName'>Sp.Atck</div>
                            <div className='statValue'>{pokemon[0]?.specialAttack}</div>
                            <div className='statMaxBar'>
                                <div className='statBar' style={{ width: barWidth(pokemon[0]?.specialAttack), background: barColor(pokemon[0]?.specialAttack) }}>
                                </div>
                            </div>
                        </div>
                        <div className='statWrapper'>
                            <div className='statName'>Sp.Def</div>
                            <div className='statValue'>{pokemon[0]?.specialDefense}</div>
                            <div className='statMaxBar'>
                                <div className='statBar' style={{ width: barWidth(pokemon[0]?.specialDefense), background: barColor(pokemon[0]?.specialDefense) }}>
                                </div>
                            </div>
                        </div>
                        <div className='statWrapper'>
                            <div className='statName'>Speed</div>
                            <div className='statValue'>{pokemon[0]?.speed}</div>
                            <div className='statMaxBar'>
                                <div className='statBar' style={{ width: barWidth(pokemon[0]?.speed), background: barColor(pokemon[0]?.speed) }}>
                                </div>
                            </div>
                        </div>
                        <div className='statWrapper'>
                            <div className='statName'>Total</div>
                            <div className='statValue'>{totalStats}</div>
                        </div>
                    </Stats>
                    <MovesWrapper>
                        <MiniCard>
                            <div className="container-top">
                                <p className="number">#{pokemon[0]?.number.toLocaleString(undefined, {
                                    minimumIntegerDigits: 2,
                                    useGrouping: false
                                })}
                                </p>
                                <p className="name">{pokemon[0]?.name}</p>
                                <div className="detail">
                                    <ol className="types">
                                        {pokemon[0]?.types.map((type) => <li key={type} className="type ${type}">
                                            <img className="typeIcon" src={`bullets/${type}.png`} alt="" />
                                        </li>)}
                                    </ol>
                                </div>
                            </div>
                            <img className="mainImg" src={pokemon[0]?.photo} alt="foto" />
                        </MiniCard>
                        <Moves>
                            <h1>Moves:</h1>
                            <ol className="moveNameWrapper">
                                {pokemon[0]?.moves.map((move) => <li key={Math.random()} className="moveName">
                                    {move?.move.name}
                                </li>)}
                            </ol>
                        </Moves>
                    </MovesWrapper>
                </div>
            </DetailCardWrapper>
        </Container>
    )
}