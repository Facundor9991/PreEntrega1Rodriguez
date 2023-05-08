
import { Link } from 'react-router-dom';
import { memo } from 'react';

export const Categorias = memo(() => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
                <Link className='nav-link' to={"/"}>
                <button className='btn btn-secondary'>
                    <i className="fas fa-list fa-lg"> Inicio</i>
                </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className='nav-link' to={"/category/1"}>
                <button className='btn btn-secondary'>
                    
                    <i className="fas fa-plane fa-lg">Aeronaves</i>
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to={"/category/2"}>
                <button className='btn btn-secondary'>
                    <i className="fas fa-car fa-lg"> Automoviles</i>
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to={"/category/3"}>
                <button className='btn btn-secondary'>
                <i className="fas fa-motorcycle fa-lg"> Motos</i>
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to={"/category/4"}>
                <button className='btn btn-secondary'>
                    <i className="fas fa-ship fa-lg"> Lanchas</i>
                </button>
                </Link>
            </li>
           
        </ul>
    );
})
