import {
  HashRouter as BrowserRouter, //GH_PAGES DO NOT SUPPORT IT (mudar para HashRouter)
  Routes,
  Route,
} from 'react-router-dom';
import Main from '../pages/Main'
import Pokedex from '../pages/Pokedex'
import { PokeDetails } from '../pages/PokeDetails'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:pageNumber?' element={<Main />} />
        <Route path='/minhapokedex' element={<Pokedex />} />
        <Route path='/pokemon/:identify' element={<PokeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router