import React, { useContext } from 'react'
import { PokeContext } from '../Global/PokeContext'

export const useAlert = (value) => {

    const [showAlert, setShowAlert] = useContext(PokeContext)['alertState']

    const add = <img src='alertCapture.png' style={{ width: "450px", height: "225px" }} />
    const remove = <img src='alertRemove.png' style={{ width: "450px", height: "225px" }} />

    function lalala() {
        if (value === 'addPokemon') {
            setTimeout(() => {
                setShowAlert('sumir')
            }, 2000);
            return add
        } else if (value === 'delPokemon') {
            setTimeout(() => {
                setShowAlert('sumir')
            }, 2000);
            return remove
        } else return ''
    }
    return lalala()
}