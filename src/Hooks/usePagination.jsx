import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokeContext } from '../Global/PokeContext'
import { Button } from './paginationStyles'

const usePagination = (total) => {
    const [pages, setPages] = useState()
    const [pagesButtons, setPagesButton] = useState([])
    const [actualPage, setActualPage] = useContext(PokeContext)['pageState']

    const navigate = useNavigate()

    useEffect(() => {
        setPages(total / 20)
    }, [total])

    useEffect(() => {
        setPagesButton(Array.from({ length: pages }, (_, i) => (
            <Button
                key={i + 1}
                onClick={() => { navigate(`/${i + 1}`); setActualPage(i + 1) }}
                index={(i + 1)}
                actualPage={actualPage}
            >
                {i + 1}
            </Button>
        )))
    }, [pages, actualPage])

    return pagesButtons
}

export default usePagination