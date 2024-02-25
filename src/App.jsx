// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestauranteContextProvider from './context/RestauranteContext'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import RestauranteNavbar from './components/navbar/RestauranteNavbar';
import RestauranteHome from './views/home/RestauranteHome';
import PlatoDetalle from './views/detalles/PlatoDetalle';
import Carrito from './views/carrito/Carrito';
import Error from './views/RestauranteError/Error';
import Login from './views/login/Login';
import Registro from './views/registro/Registro.jsx';
// import Footer from './components/footer/Footer'


function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <RestauranteContextProvider>
          <RestauranteNavbar />

          <Routes>
            <Route index element={ <RestauranteHome /> } />
            <Route path="/" element={ <RestauranteHome />} />
            <Route path="/pizza/:id" element={ <PlatoDetalle /> } />
            <Route path="/carrito" element={ <Carrito />} />
            <Route path="/login" element={ <Login /> } />
            <Route path="/registro" element={ <Registro /> } />
            {/* <Route path='footer' element={ <Footer /> } /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        
        </RestauranteContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
