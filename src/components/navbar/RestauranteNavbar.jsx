import { NavLink } from 'react-router-dom';

import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarStyle.css'

import { RestauranteContext } from '../../context/RestauranteContext';
import { useContext } from 'react';

const RestauranteNavbar = () => {
  const { total } = useContext(RestauranteContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-actve");

  return (
    <div>
      <nav className="d-flex align-items-center justify-content-between p-3 navbar fixed-top bg-black">
        <NavLink className={ setActiveClass } to="/">
          <img src='/icons8-pizza-65.png' style={{ width: '2rem' }} />
          <span>Prestorante</span>
        </NavLink>

        <NavLink className={ setActiveClass } to="/login">
          <span>Login</span>
        </NavLink>

        <NavLink className={ setActiveClass } to="/registro">
          Registrarse
        </NavLink>

        <NavLink className={ setActiveClass } to="/carrito">
          <img src='/carrito-de-compras.png' style={{width: '2rem'}} />
          <span className='totalCompra'> Carrito $ {total.toLocaleString('cl-CL')}</span>
        </NavLink>

      </nav>
    </div>
  )
}

export default RestauranteNavbar