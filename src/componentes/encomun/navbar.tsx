//import React from "react"
import reactLogo from "/src/assets/react.svg"
import { BrowserRouter, Link, NavLink } from "react-router-dom"


const Navbar = () =>  {
   
    const renderList = () => {
        return(
              <BrowserRouter>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-ligth">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand text-light ms-5" to="{Inicio}" >
                            <img src={reactLogo} className='logo react' alt='React Logo' />
                            <h4>E-commerce</h4>
                        </NavLink>
                    </div>
                </nav>

                <div className="collapse navbar-collapse me-4 mt-3 mb-3" id="navbar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="Inicio">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="{Products}">Productos</NavLink>
                        </li>
                        <li className="nav-item">
          
                            <NavLink className="nav-link text-light" to="{Categoria}">Categorias</NavLink>
          
                        </li>
                        <li className="nav-item">
          
                            <NavLink className="nav-link text-light" to="{Form_Usuario}">Registrate</NavLink>
          
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="{Logueo}">Logueate</NavLink>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        )
        
    
        }    
        return (
            <ul>
                {renderList()}
            </ul>
        )
}

export default Navbar