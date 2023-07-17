//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FiltersProvider } from './context/filters.tsx'
import './index.css'
import { Footer } from './componentes/Footer'
import { Header } from './componentes/Header'
import { IS_DEVELOPMENT } from './configs.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <Header/>
    <App />
    {IS_DEVELOPMENT && <Footer/>}
  </FiltersProvider>
)
