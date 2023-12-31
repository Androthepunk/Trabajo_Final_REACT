/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext, useEffect, useRef, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, RouterProps, Routes as Switch } from 'react-router-dom'
import Products from './componentes/Products'
import {products as initialProducts} from './mocks/products.json'
//import Categorias from './componentes/Categorias'
import Login from './componentes/encomun/Logueo'
//import Registrate from './componentes/Registrate'
//import { FiltersContext } from './context/filters'
import { useFilters } from './hooks/useFilters'
import { Cart } from './componentes/Cart'
import { CartProvider } from './context/cart'
import Form_Usuario from './componentes/encomun/Form_Usuario'
import { Usuario } from './componentes/encomun/Usuario'
import { INITIAL_STATE} from './hooks/useNewUsuarioForm'
import Logueo from './componentes/encomun/Logueo'
import Navbar from './componentes/encomun/navbar'
import { Filters } from './componentes/Filters'

interface AppState {
  susS: Array<Usuario>
}

function App() {
  // para productos
  //const [products]=useState(initialProducts)
  //const [prods, setProds] = useState<AppState["prods"]>([])
  const [susS, setSus] = useState<AppState["susS"]>([])
  useEffect(()=>{
    return setSus(INITIAL_STATE)
  },[])
  const {filterProducts} = useFilters()
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const filteredProducts = filterProducts(initialProducts)

  //const [newProdsNumber, setNewProdsNumber] = useState<AppState["newProdsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)
 

  const handleNewSus = (newSus: Usuario): void =>{
    setSus(susS =>[...susS, newSus])
  }

  return (
    <div className='App' ref={divRef}>
    
     <div className='nav-bar' ref={divRef}>
      <Router location={''} navigator={undefined}>
         
          <Switch>
            <Route path='/inicio'/>
            <Route path='/Productos' element={<Products products={filteredProducts}/>}/>
            {/*<Route path='/Logueate' element={<Login logs={logs}/>}/>
            <Route path='/Categorias' element={<Categorias categs={categs}/>}/>*/}
            <Route path='/Registrate' element={<Form_Usuario children={undefined} OnNewSus={handleNewSus}  />}/>
            <Route path='/Logueate' element={<Logueo OnNewSus={handleNewSus} children={undefined}/>}/>
          </Switch>
        </Router>
      </div> 
      <CartProvider>
        
        <h1>Bienvenido a mi tienda</h1>
        <h3>¿Con qué podemos ayudarlo?</h3>
        <Cart/>
        <Products products={filteredProducts}/>
        {/*<Logueo children={undefined} OnNewSus={handleNewSus}  />*/}
        
      </CartProvider>
     
      
    </div>
  )
}

export default App