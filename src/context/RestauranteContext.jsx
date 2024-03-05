import { createContext, useState, useEffect } from 'react';

export const RestauranteContext = createContext({});

const RestauranteProvider = ( { children } ) => {
  const [platos, setPlatos] = useState([]); // maneja la petición a platos.json
  const [carrito, setCarrito] = useState([]); // maneja los estados del carrito
  const [total, setTotal] = useState(0); // da el valor a pagar
  const [contador, setContador] = useState(0); // contador del total de productos
  // const [user, setUser] = useState(false)
  // const [vistaHome, setVistaHome] = useState(true)
  // const [vistaAdmin, setVistaAdmin] = useState(false)
  // const [user, setUser] = useState({
  //   email: 'algo@correo.com',
  //   password: '1234'
  // });

  const getPlatos = async () => {
    const response = await fetch("/pizzas.json")
    const data = await response.json()
    // console.log(data)
    setPlatos(data);
  };

  useEffect(() => {
    getPlatos();
  }, []);

  const agregarAlCarrito = (plato) => {
    const existePlato = carrito.find(index => index.id === plato.id)
    if (!existePlato){
      setCarrito([...carrito, { ...plato, cantidad: 1 }]);
      setTotal(() => total + plato.price);
      setContador(() => contador + 1);
    } else {
      existePlato.cantidad += 1;
      setContador(() => contador + 1)
      setCarrito([...carrito]);
      setTotal(() => total + plato.price)
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

  // const persona = {
  //   email: 'algo@correo.com',
  //   password: '1234'      {/* </RestauranteProvider> */}
    {/* </BrowserRouter> */}

  // }
  // localStorage.setItem('persona', JSON.stringify(persona))

  return (
    <RestauranteContext.Provider value={{ platos, carrito, total, contador, getPlatos, agregarAlCarrito, quitarDelCarrito, limpiarElCarrito, pagar }}>
      { children }
    </RestauranteContext.Provider>
  )
};

export default RestauranteProvider;