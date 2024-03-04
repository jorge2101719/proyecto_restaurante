import 'bootstrap/dist/css/bootstrap.min.css'
import './Formulario.css'
import { useState } from 'react'

// originalmente estaba onLogin en lugar de setUser
const Login = ({ user, setUser }) => {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (correo === "" || password === "") {
        setError(true)
        return
    }

    setError(false)
    setUser([ correo, password ])
    console.log(user)
  }

  return (
    <div className='container-sm col-3 text-center'>

    <form
      className='formulario'
      onSubmit={ handleSubmit }
    >
      <label htmlFor="email">Email</label>
      <input
        type="text"
        value={correo}
        onChange={e => setCorreo(e.target.value)}
        id="email"
      />
      {/* {correo} */}

      <label htmlFor="password">Password</label>
      <input
        type="passwor"
        value={password}
        onChange={e => setPassword(e.target.value)}
        id="password"
      />
      {/* {password} */}

      <button type='submit' className='btn btn-primary'>Iniciar sesión</button>
    </form>
    { error && <p id='login-error'>Todos los campos son obligatorios</p> }
  </div>
)
}    

export default Login