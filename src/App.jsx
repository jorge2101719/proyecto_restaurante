// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestauranteContextProvider from './context/RestauranteContext'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/Navbar';
import RestauranteHome from './views/home/RestauranteHome';
import PlatoDetalle from './views/detalles/PlatoDetalle';
import Carrito from './views/carrito/Carrito'
import Error from './views/pizzaError/Error';
// import Footer from './components/footer/Footer'


function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <RestauranteContextProvider>
          <Navbar />

          <Routes>
            <Route index element={ <RestauranteHome /> } />
            <Route path="/" element={ <RestauranteHome />} />
            <Route path="/pizza/:id" element={ <PlatoDetalle /> } />
            <Route path="carrito" element={ <Carrito />} />
            {/* <Route path='footer' element={ <Footer /> } /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        
        </RestauranteContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
