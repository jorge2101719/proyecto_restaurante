import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
import { Container, Navbar } from 'react-bootstrap';

import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarStyle.css'

import { RestauranteContext } from '../../context/RestauranteContext';
import { useContext } from 'react';

const RestauranteNavbar = () => {
  const { total, vistaHome, vistaAdmin } = useContext(RestauranteContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-actve");

  return (
    <div>
      <Navbar className="nav" sticky='top' expand='xl'>
        <Container fluid>
        <NavLink className={ setActiveClass } to="/">
          <img src='/icons8-pizza-65.png' style={{ width: '2rem' }} />
          <span>Prestorante</span>
        </NavLink>

        <NavLink className={ setActiveClass } to="/login">
          <span>Login</span>
        </NavLink>

        <NavLink className={ setActiveClass } to="/admin">
          Admin
        </NavLink>

        <NavLink className={ setActiveClass } to="/carrito">
          {/* <img src='/carrito-de-compras.png' style={{width: '2rem'}} /> */}
          <span className='totalCompra'> Total $ {total.toLocaleString('cl-CL')}</span>
        </NavLink>
        </Container>
        

      </Navbar>
    </div>
  )
}

export default RestauranteNavbar