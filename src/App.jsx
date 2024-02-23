// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PizzasContextProvider from './context/PizzaContext'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import PizzasNavbar from './components/PizzasNavbar/PizzasNavbar';
import Home from './views/pizzaHome/Home';
import PizzaDetalle from './views/detalles/PizzaDetalle';
import Error from '.views/pizzaError/Error';


function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <PizzasContextProvider>
          <PizzasNavbar />

          <Routes>
            <Route index element={ <Home /> } />
            <Route path="/" element={ <Home />} />
            <Route path="/pizza/:id" element={ <PizzaDetalle /> } />
            <Route path="carrito" element={ <Carrito />} />
            <Route path="*" element={<Error />} />
          </Routes>
        
        </PizzasContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
