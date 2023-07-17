import { Filters } from './Filters'
import Navbar from './encomun/navbar'

export function Header () {
  return (
    <header>
      <h1>React E-commerce Shop 🛒</h1>
      <Navbar/>
      <Filters />
    </header>
  )
}