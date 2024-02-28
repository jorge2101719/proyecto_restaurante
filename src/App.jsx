import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RestauranteContext } from './context/RestauranteContext'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import RestauranteHome from './components/home/RestauranteHome';
import Login from './views/rutas/Login.jsx';
import Admin from './views/rutas/Admin.jsx';

import RestauranteNavbar from './components/navbar/RestauranteNavbar';
import PlatoDetalle from './views/detalles/PlatoDetalle';
import Carrito from './views/carrito/Carrito';
import Error from './views/RestauranteError/Error';
// import Footer from './components/footer/Footer'

// import './views/home/Home.css'

function App() {
  const { user } = useContext(RestauranteContext)
  
  return (
    <div sm={3}>
      <RestauranteNavbar />

      <Routes>
        <Route index element={ <RestauranteHome /> } />
        <Route path="/admin" element={ user ? <Admin /> : <Navigate to='/login'/> } />
        <Route path="/login" element={ <Login /> } />

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
