//import React from "react"
import reactLogo from "/src/assets/react.svg"
import { BrowserRouter, Link } from "react-router-dom"


const Navbar = () =>  {
   
    const renderList = () => {
        return(
              <BrowserRouter>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-ligth">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light ms-5" to="{Inicio}" >
                            <img src={reactLogo} className='logo react' alt='React Logo' />
                            <h4>E-commerce</h4>
                        </Link>
                    </div>
                </nav>

                <div className="collapse navbar-collapse me-4 mt-3 mb-3" id="navbar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="Inicio">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="{Productos}">Productos</Link>
                        </li>
                        <li className="nav-item">
          
                            <Link className="nav-link text-light" to="{Categoria}">Categorias</Link>
          
                        </li>
                        <li className="nav-item">
          
                            <Link className="nav-link text-light" to="{Form_Usuario}">Registrate</Link>
          
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="{Login}">Logueate</Link>
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