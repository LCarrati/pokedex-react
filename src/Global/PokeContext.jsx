import { createContext, useState } from 'react';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
    const [myPokedex, setMyPokedex] = useState([]);
    const [actualPage, setActualPage] = useState(1)
    const [showAlert, setShowAlert] = useState();

    return (
        <PokeContext.Provider value={{
            'pokedexState':[ myPokedex, setMyPokedex ], 
            'pageState': [actualPage, setActualPage],
            'alertState': [showAlert, setShowAlert]
            }}>
            {children}
        </PokeContext.Provider>
    )
}