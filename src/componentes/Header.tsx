import { Filters } from './Filters'
import Navbar from './encomun/navbar'
import './Header.css'

export function Header () {
  return (
    <header className='header'>
      <h1>React E-commerce Shop 🛒</h1>
      <Navbar/>
      <Filters />
    </header>
  )
}