import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { RestauranteContext } from './context/RestauranteContext'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import RestauranteHome from './components/home/RestauranteHome';
import Login from './pages/Login';
// import Admin from './views/rutas/Admin.jsx';

import RestauranteNavbar from './components/navbar/RestauranteNavbar';
import PlatoDetalle from './views/detalles/PlatoDetalle';
import Carrito from './views/carrito/Carrito';
import HomeAdmin from './components/home/HomeAdmin';
import Error from './views/RestauranteError/Error';
// import Footer from './components/footer/Footer'

// import './views/home/Home.css'

function App() {
  // const { persona } = useContext(RestauranteContext)
  const [user, setUser] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true)
  }

  const handleLogout = () => {
    setIsLogin(false)
  }
  
  return (
    <div className='container-fluid App'>
      <RestauranteNavbar isLogin={isLogin} setIsLogin={setIsLogin} />

      <Routes>
        {/* <Route index element={ <RestauranteHome /> } /> */}
        {/* <Route path="/admin" element={ persona ? <Admin /> : <Navigate to='/login'/> } /> */}
        {
          !user.length > 0 ? 
          <Route path="/login" element={ <Login setUser={ setUser } user={ user } /> } /> : 
          <Route path="/admin" element={ <HomeAdmin user={user} setUser={setUser} />} /> 
        }
        

        <Route path="/" element={ <RestauranteHome />} />
        <Route path="/pizza/:id" element={ <PlatoDetalle /> } />
        <Route path="/carrito" element={ <Carrito />} />
        {/* <Route path='footer' element={ <Footer /> } /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
