import 'bootstrap/dist/css/bootstrap.min.css'
import './Formulario.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { RestauranteContext } from '../context/RestauranteContext';
// import { useContext } from 'react'

// import HomeAdmin from '../components/home/HomeAdmin';
// const form = useRef();

const initialForm = {correo: 'algo@correo.com', password: '1234'}

const Login = () => {
  const navigate = useNavigate();
  // const {user, setUser} = useContext(RestauranteContext)
  const [user, setUser] = useState(false)
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)

  // const handleUser = (e) => setUser({...user, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault();

    // const [user, setUser] = useState(false)

    if (correo === '' || password === '') {
        setError(true)
        setUser(!user)
        return
    }

    setCorreo('')
    setPassword('')
    setError(false);
    setUser(!user);
    // form.current.reset();
    navigate('/admin');

    // console.log('el valor de user es', user)

    return
  }

  return (
    <div className='container-sm col-3'>

    <form
      className='formulario'
      onSubmit={ handleSubmit }
      // ref = { Form }
    >
      <label htmlFor="email">Correo</label>
      <input
        type="email"
        // value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        id="email"
      />
      {/* {correo} */}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        // value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
      />
      {/* {password} */}

      <button type='submit' className='btn btn-primary'>Iniciar</button>
    </form>
    { error && <p id='login-error'>Todos los campos son obligatorios</p> }
    {/* {!user ? <HomeAdmin /> : <Login />} */}
    {/* {user ? <HomeAdmin /> : null} */}
  </div>
)
}    

export default Login