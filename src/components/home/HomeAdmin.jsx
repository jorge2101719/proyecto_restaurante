import { useNavigate } from "react-router-dom"
// import { useState } from "react";

const HomeAdmin = ({ user, setUser }) => {
  const navigate = useNavigate();
  // const [user, setUser] = useState(true);

  const handleLogout = () => {
    console.log('cerrando sesión... El valor es user es', user)
    setUser(false);
    console.log('ahora el valor de user es', user)
    navigate('/');
    return
  }

  return (
    <div>
      <h1>Bienvenido {user}</h1>
      <button className="btn btn-danger" onClick={ handleLogout }>Cerrar sesión</button>
    </div>
  )
}

export default HomeAdmin