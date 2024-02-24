import { createContext, useEffect, useState } from 'react';

export const RestauranteContext = createContext({});

const RestauranteContextProvider = ({ children }) => {
  const [platos, setPlatos] = useState([]); // maneja la petición a pizzas.json
  const [carrito, setCarrito] = useState([]); // maneja los estados del carrito
  const [total, setTotal] = useState(0); // da el valor a pagar
  const [contador, setContador] = useState(0);

  const getPlatos = async () => {
    const response = await fetch("/pizzas.json")
    const data = await response.json()
    setPlatos(data);
  };

  useEffect(() => {
    getPlatos();
  }, []);

  const agregarAlCarrito = (plato) => {
    const existePlato = carrito.find(index => index.id === pizza.id)
    if (!existePlato){
      setCarrito([...carrito, { ...pizza, cantidad: 1 }]);
      setTotal(() => total + pizza.price);
      setContador(() => contador + 1);
    } else {
      existePlato.cantidad += 1;
      setContador(() => contador + 1)
      setCarrito([...carrito]);
      setTotal(() => total + pizza.price)
    }
  }

  const quitarDelCarrito = (id) => {
    const actualizarCarrito = carrito.map((item) => {
      if(item.id === id) {
        const actualizarItem = {... item, cantidad: item.cantidad - 1 }
        setContador(() => contador - 1);
        setTotal(() => total - item.price)
        return actualizarItem
      }
      return item
    }).filter( item => item.cantidad > 0)
    setCarrito(actualizarCarrito);
  }

  const limpiarElCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setContador(0);
  }

  const pagar = () => {
    setCarrito([]);
    setTotal(0);
    setContador(0);
    alert('Gracias por su compra')
  }

  return (
    <RestauranteContext.Provider value={{ platos, carrito, total, contador, getPizzas, agregarAlCarrito, quitarDelCarrito, limpiarElCarrito, pagar }} >
      {children}
    </RestauranteContext.Provider>
  )
};

export default RestauranteContextProvider;