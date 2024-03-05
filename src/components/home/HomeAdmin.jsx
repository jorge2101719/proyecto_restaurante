import { useNavigate } from "react-router-dom"
import { useState } from "react";

const HomeAdmin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);

  const handleLogout = () => {
    setUser(false);
    console.log('cerrando sesión... El valor es user es', user)
    navigate('/');
    return
  }

  return (
    <div>
      <h1>Bienvenido</h1>
      <button className="btn btn-second" onClick={ handleLogout }>Cerrar sesión</button>
    </div>
  )
}

export default HomeAdmin