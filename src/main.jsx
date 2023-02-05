import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GlobalStyle } from './Global/globalStyles'
import { PokeProvider } from './Global/PokeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <PokeProvider>
    <GlobalStyle />
    <App />
  </PokeProvider>
  // </React.StrictMode>,
)
