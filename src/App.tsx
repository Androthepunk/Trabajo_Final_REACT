import { useEffect, useRef, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/encomun/navbar'
import { Route, Router, Routes as Switch } from 'react-router-dom'
import Productos from './componentes/Productos'
import Categorias from './componentes/Categorias'
import Login from './componentes/Login'
import Registrate from './componentes/Registrate'

interface AppState {
  prods: Array<prod>
  categs: Array<categ>
  regs: Array<reg>
  logs: Array<log>
  //newPerssNumber: number
  //newEpicsNumber: number
  //newUbicsNumber: number
}


function App() {
  // para productos
  const [prods, setProds] = useState<AppState["prods"]>([])
  const [newProdsNumber, setNewProdsNumber] = useState<AppState["newProdsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setProds()
  }, [])

// para episodios

  const [categs, setCategs] = useState<AppState["categs"]>([])
  const [newCategsNumber, setNewCategsNumber] = useState<AppState["newCategsNumber"]>(0)

  useEffect(() => {
    setCategs()
  }, [])

// para ubicaciones

const [regs, setRegs] = useState<AppState["regs"]>([])
  const [newRegsNumber, setNewregsNumber] = useState<AppState["newRegsNumber"]>(0)
  useEffect(() => {
    setRegs()
  }, [])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logs, setLogs] = useState<AppState["logs"]>([])
  const [newLogsNumber, setNewLogsNumber] = useState<AppState["newLogsNumber"]>(0)
  useEffect(() => {
    setLogs()
  }, [])

  const handleNewProds = (newProds: prods): void => {
    setProds(prods => [... prods, newProds])
    setNewProdsNumber( p => p + 1)
  }

  const handleNewCategs = (newCategs: pers): void => {
    setCategs(categs => [... categs, newCategs])
    setNewCategsNumber( m => m + 1)
  }

  const handleNewRegs = (newRegs: regs): void => {
    setRegs(regs => [... regs, newRegs])
    setNewRegsNumber( n => n + 1)
  }

  const handleNewLogs = (newLogs: logs): void => {
    setLogs(logs => [... logs, newlogs])
    setNewLogsNumber( n => n + 1)
  }

  return (
    <>
    
     <div className='nav-bar' ref={divRef}>
        <Navbar/>
        <Router location={''} navigator={undefined}>
         
          <Switch>
            <Route path='/inicio'/>
            <Route path='/Productos' element={<Productos prods={prods}/>}/>
            <Route path='/Categorias' element={<Categorias categs={categs}/>}/>
            <Route path='/Registrate' element={<Registrate regs={regs}/>}/>
            <Route path='/Logueate' element={<Login logs={logs}/>}/>
            
          </Switch>
        </Router>
      </div> 
      <div className='App' ref={divRef}>
        
        <h1>Bienvenido a mi rebusque</h1>
        <Productos/>
      </div>
     
      {/*New perss: {newPerssNumber}
      New epics: {newEpicsNumber}
      New ubics: {newUbicsNumber}*/}
    </>
  )
}

export default App
