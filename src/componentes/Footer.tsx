import './Footer.css'
//import { useCart } from "../hooks/useCart"
import { useFilters } from "../hooks/useFilters"

export function Footer () {
  
  const { filters } = useFilters()
  //const { cart } = useCart()
    return (
      <footer className='footer'>
        <h4>E-Commerce ⚛️ － <span>@andro</span></h4>
        <h5>Shopping Cart</h5>
      </footer>
    )
  }export function Footer1 () {
    // const { filters } = useFilters()
  
    return (
      <footer className='footer'>
        <h4>E-Commerce ⚛️ － <span>@andro</span></h4>
        <h5>Shopping Cart</h5>
      </footer>
    )
  }