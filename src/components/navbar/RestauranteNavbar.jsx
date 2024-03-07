import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
// import { Navbar } from 'react-bootstrap';

import '../../App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarStyle.css'

// import { RestauranteContext } from '../../context/RestauranteContext';
// import { useContext } from 'react';

const RestauranteNavbar = () => {
  // const navigate = useNavigate();
  // const { user, setUser } = useContext(RestauranteContext);
  const isLogin = (user) => {
    if (!user) {
      return (
        <div>
          {/* <NavLink to='/registrarse' className='btn m-1 setActiveClass'>Registrarse</NavLink> */}
          <NavLink to='/login' className={setActiveClass} id='login'><button className='btn btn-warning'>Login</button></NavLink>
        </div>
      )
    }

    navigate('/admin')

    // return (
    //   <div>
    //     <NavLink to='/admin'>Administrador</NavLink>
    //   </div>
    // )
  }

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-actve");

  return (
      <Navbar className="mi-nav container-fluid sticky-top">
        <span>
          <NavLink to='/'>
            <img id='logo' src="https://images.ecestaticos.com/h53ifQ5cwmB5AbJT5MR7yTZ0_DA=/125x0:2144x1513/996x747/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3b8%2F281%2Fef2%2F3b8281ef2d44ef19e6a613d298ccf635.jpg" style={{width: '6%'}} alt="logo" />
          </NavLink>
        </span>
        <div className='mi-nav'>
          <span id='nav-por-defecto'>
            <NavLink to='/' className={setActiveClass} id='inicio'><button className='btn btn-success'>Inicio</button></NavLink>
            <NavLink to='/carrito' className={setActiveClass} id='detalle'><button className='btn btn-primary'>Detalle</button></NavLink>
          </span>
          {isLogin()}
        </div>
      </Navbar>
  )
}

export default RestauranteNavbar