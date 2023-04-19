import React from 'react';
import { Link } from 'react-router-dom';

export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
                <Link className='nav-link' to={"/"}>
                <button className='btn btn-secondary'>
                    <i className="fas fa-list fa-lg"> Menu</i>
                </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className='nav-link' to={"/category/1"}>
                <button className='btn btn-secondary'>
                    <i className="fas fa-home fa-lg"> Propiedades</i>
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to={"/category/2"}>
                <button className='btn btn-secondary'>
                    <i className="fas fa-car fa-lg"> Automotores</i>
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to={"/category/3"}>
                <button className='btn btn-secondary'>
                <i className="fas fa-star fa-lg"> DecoHogar</i>
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
}
