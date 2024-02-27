import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginStyle.css'

const Login = () => {
    // Estados del formulario
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    // Estado de errores
    const [error, setError] = useState(false)

    // Función antes de enviar
    const validarRegistro = (e) => {
        e.preventDefault()

        if (correo === '' || password === '') {
            alert('Debe completar todos los campos')
            setError(true)
            return
        }
        setError(false)
        setCorreo('')
        setPassword('')
    }

    return (
      <div className='estilo-login'>
        <h1>Ingrese sus datos</h1>

        <form onSubmit={validarRegistro}>
          <div className='form-group'>
            <label>Email</label>
              <input
                className='form-control'
                name='correo'
                type='email'
                placeholder='ingrese su correo'
                onChange={ e => setCorreo(e.target.value) }
                value={correo}
              />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              className='form-control'
              type='password'
                    name='password'
                    placeholder='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    )
}

export default Login