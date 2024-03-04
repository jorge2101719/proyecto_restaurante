import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
// import { Navbar } from 'react-bootstrap';

import '../../App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarStyle.css'

import { RestauranteContext } from '../../context/RestauranteContext';
import { useContext } from 'react';

const RestauranteNavbar = ({ isLogin, setIsLogin }) => {
  const { total, contador } = useContext(RestauranteContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-actve");

  return (
    <div className='container-fluid sticky-top'>
      <Navbar className="justify-content-end mi-nav" sticky='top' expand='xl'>
        {!isLogin ? (
          <div className='container-fluid'>
            <NavLink className={setActiveClass} to="/">
              {/* <img src='/icons8-pizza-65.png' style={{ width: '2rem' }} /> */}
              <span>Prestorante</span>
            </NavLink>

            <NavLink className={setActiveClass} to="/carrito">
              {/* <img src='/carrito-de-compras.png' style={{width: '2rem'}} /> */}
              {/* <span className='totalCompra'> Total $ {total.toLocaleString('cl-CL')}</span> */}
              <span className='totalCompra'> Total de productos: {contador} </span>
            </NavLink>

            <NavLink className={setActiveClass} to="/login">
              <span>Login</span>
            </NavLink>
          </div>
        ) : (
          <div className='container-fluid'>
                <NavLink className={setActiveClass} to='/'>
                  <span>Prestorante</span>
                </NavLink>

                <NavLink className={setActiveClass} to="/login">
                  <span>Login</span>
                </NavLink>
          </div>
        )}
      </Navbar>
    </div>
  )
}

export default RestauranteNavbar